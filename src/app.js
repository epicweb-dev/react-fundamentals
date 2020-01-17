import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import preval from 'preval.macro'
import pkg from '../package.json'

const {title: projectTitle} = pkg

if (!projectTitle) {
  throw new Error('The package.json must have a title!')
}

const exerciseInfo = preval`module.exports = require('./load-exercises')`

for (const infoKey in exerciseInfo) {
  const info = exerciseInfo[infoKey]
  info.exercise.Component = React.lazy(() =>
    import(`./exercises/${infoKey}.js`),
  )
  info.final.Component = React.lazy(() =>
    import(`./exercises-final/${infoKey}.js`),
  )
}

const history = createBrowserHistory()
function handleAnchorClick(event) {
  if (event.metaKey || event.shiftKey) {
    return
  }
  event.preventDefault()
  history.push(event.target.getAttribute('href'))
}

function ComponentContainer({label, ...props}) {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{label}</h2>
      <div
        style={{
          flex: 1,
          padding: 20,
          border: '1px solid',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...props}
      />
    </div>
  )
}

function ExtraCreditLinks({exerciseId}) {
  const {extraCreditTitles} = exerciseInfo[exerciseId]
  if (!extraCreditTitles) {
    return null
  }

  return (
    <div style={{gridColumn: 'span 2'}}>
      {`Extra Credits: `}
      {Object.entries(extraCreditTitles).map(([id, title], index, array) => (
        <span key={id}>
          <a
            href={`/isolated/exercises-final/${exerciseId}-extra.${id}`}
            onClick={handleAnchorClick}
          >
            {title}
          </a>
          {array.length - 1 === index ? null : ' | '}
        </span>
      ))}
    </div>
  )
}

function ExerciseContainer() {
  let {exerciseId} = useParams()
  const {
    title,
    exercise,
    final,
    exercise: {Component: Exercise},
    final: {Component: Final},
  } = exerciseInfo[exerciseId]
  return (
    <div
      style={{
        padding: '20px 20px 40px 20px',
        minHeight: '100%',
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '30px 1fr 30px',
      }}
    >
      <h1 style={{gridColumn: 'span 2', textAlign: 'center'}}>{title}</h1>
      <ComponentContainer
        label={
          <a href={exercise.isolatedPath} onClick={handleAnchorClick}>
            Exercise
          </a>
        }
      >
        <Exercise />
      </ComponentContainer>
      <ComponentContainer
        label={
          <a href={final.isolatedPath} onClick={handleAnchorClick}>
            Final
          </a>
        }
      >
        <Final />
      </ComponentContainer>
      <NavigationFooter exerciseId={exerciseId} type="page" />
      <ExtraCreditLinks exerciseId={exerciseId} />
    </div>
  )
}

function NavigationFooter({exerciseId, type}) {
  const current = exerciseInfo[exerciseId]
  let suffix = ''
  let info = current.final
  if (type === 'exercise') {
    suffix = '/exercise'
    info = current.exercise
  } else if (type === 'final') {
    suffix = '/final'
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gridColumn: 'span 2',
      }}
    >
      <div style={{flex: 1}}>
        {info.previous ? (
          <Link to={`/${info.previous}${suffix}`}>
            {exerciseInfo[info.previous].title}{' '}
            <span role="img" aria-label="previous">
              👈
            </span>
          </Link>
        ) : null}
      </div>
      <div style={{flex: 1, textAlign: 'center'}}>
        <Link to="/">Home</Link>
      </div>
      <div style={{flex: 1, textAlign: 'right'}}>
        {info.next ? (
          <Link to={`/${info.next}${suffix}`}>
            <span role="img" aria-label="next">
              👉
            </span>{' '}
            {exerciseInfo[info.next].title}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

function Home() {
  return (
    <div
      style={{
        maxWidth: 800,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 30,
      }}
    >
      <h1 style={{textAlign: 'center'}}>{projectTitle}</h1>
      <div>
        {Object.entries(exerciseInfo).map(
          ([filename, {title, final, exercise}]) => {
            return (
              <div key={filename} style={{margin: 10}}>
                {filename}
                {'. '}
                <Link to={`/${filename}`}>{title}</Link>{' '}
                <small>
                  <a href={exercise.isolatedPath} onClick={handleAnchorClick}>
                    (exercise)
                  </a>{' '}
                  <a href={final.isolatedPath} onClick={handleAnchorClick}>
                    (final)
                  </a>
                </small>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div
      style={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. To open one of the exercises, go to{' '}
        <code>{`/exerciseId`}</code>, for example:{' '}
        <Link to="/01">
          <code>{`/01`}</code>
        </Link>
      </div>
    </div>
  )
}

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:exerciseId">
          <ExerciseContainer />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}

// cache
const lazyComps = {final: {}, exercise: {}, examples: {}}

function useIsolatedComponent({pathname}) {
  const isIsolated = pathname.startsWith('/isolated')
  const isFinal = pathname.includes('/exercises-final/')
  const isExercise = pathname.includes('/exercises/')
  const isExample = pathname.includes('/examples/')
  const moduleName = isIsolated
    ? pathname.split(/\/isolated\/.*?\//).slice(-1)[0]
    : null
  const IsolatedComponent = React.useMemo(() => {
    if (!moduleName) {
      return null
    }
    if (isFinal) {
      return (lazyComps.final[moduleName] =
        lazyComps.final[moduleName] ||
        React.lazy(() => import(`./exercises-final/${moduleName}.js`)))
    } else if (isExercise) {
      return (lazyComps.exercise[moduleName] =
        lazyComps.exercise[moduleName] ||
        React.lazy(() => import(`./exercises/${moduleName}.js`)))
    } else if (isExample) {
      return (lazyComps.examples[moduleName] =
        lazyComps.examples[moduleName] ||
        React.lazy(() => import(`./examples/${moduleName}.js`)))
    }
  }, [isExample, isExercise, isFinal, moduleName])
  return moduleName ? IsolatedComponent : null
}

function useExerciseTitle({pathname}) {
  const isIsolated = pathname.startsWith('/isolated')
  const isFinal = pathname.includes('/exercises-final/')
  const isExercise = pathname.includes('/exercises/')
  const exerciseName = isIsolated
    ? pathname.split(/\/isolated\/.*?\//).slice(-1)[0]
    : pathname.split('/').slice(-1)[0]

  React.useEffect(() => {
    document.title = [
      projectTitle,
      exerciseName,
      isExercise ? 'Exercise' : null,
      isFinal ? 'Final' : null,
    ]
      .filter(Boolean)
      .join(' | ')
  }, [exerciseName, isExercise, isFinal])
}

function useLocationBodyClassName({pathname}) {
  const className = pathname.replace(/\//g, '_')
  React.useEffect(() => {
    document.body.classList.add(className)
    return () => document.body.classList.remove(className)
  }, [className])
}

// The reason we don't put the Isolated components as regular routes
// and do all this complex stuff instead is so the React DevTools component
// tree is as small as possible to make it easier for people to figure
// out what is relevant to the example.
function MainApp() {
  const [location, setLocation] = React.useState(history.location)
  React.useEffect(() => history.listen(l => setLocation(l)), [])
  useExerciseTitle(location)
  useLocationBodyClassName(location)

  const IsolatedComponent = useIsolatedComponent(location)

  return (
    <React.Suspense
      fallback={
        <div style={{height: '100vh'}} className="totally-centered">
          Loading...
        </div>
      }
    >
      {IsolatedComponent ? (
        <div className="isolated-top-container">
          <div className="isolated-div-wrapper">
            <IsolatedComponent />
          </div>
        </div>
      ) : (
        <Routes />
      )}
    </React.Suspense>
  )
}

export default MainApp
