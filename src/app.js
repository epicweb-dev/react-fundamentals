import React from 'react'
import {Router, Link} from '@reach/router'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const files = ['01', '02', '03', '04', '05', '06']

const pages = files.reduce((p, filename, index, fullArray) => {
  const final = require(`./exercises-final/${filename}`)
  Object.assign(final, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
    isolatedPath: `/isolated/exercises-final/${filename}`,
  })
  const exercise = require(`./exercises/${filename}`)
  Object.assign(exercise, {
    previous: fullArray[index - 1],
    next: fullArray[index + 1],
    isolatedPath: `/isolated/exercises/${filename}`,
  })
  p[filename] = {
    exercise,
    final,
    title: final.default.title,
  }
  return p
}, {})

const filesAndTitles = files.map(filename => ({
  title: pages[filename].title,
  filename,
}))

function ComponentContainer({label, ...props}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
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

function ExerciseContainer({exerciseId}) {
  const {
    exercise: {default: Exercise},
    final: {default: Final},
  } = pages[exerciseId]
  return (
    <div
      style={{
        padding: 20,
        height: '100%',
        display: 'grid',
        gridGap: '20px',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '30px 1fr 30px',
      }}
    >
      <h1 style={{gridColumn: 'span 2', textAlign: 'center'}}>{Final.title}</h1>
      <ComponentContainer
        label={<Link to={`/${exerciseId}/exercise`}>Exercise</Link>}
      >
        <Exercise />
      </ComponentContainer>
      <ComponentContainer
        label={<Link to={`/${exerciseId}/final`}>Final Version</Link>}
      >
        <Final />
      </ComponentContainer>
      <NavigationFooter exerciseId={exerciseId} type="page" />
    </div>
  )
}

function NavigationFooter({exerciseId, type}) {
  const current = pages[exerciseId]
  let suffix = ''
  let Usage = current.final
  if (type === 'exercise') {
    suffix = '/exercise'
    Usage = current.exercise
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
        {Usage.previous ? (
          <Link to={`/${Usage.previous}${suffix}`}>
            {pages[Usage.previous].title}{' '}
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
        {Usage.next ? (
          <Link to={`/${Usage.next}${suffix}`}>
            <span role="img" aria-label="next">
              👉
            </span>{' '}
            {pages[Usage.next].title}
          </Link>
        ) : null}
      </div>
    </div>
  )
}

function FullPage({type, exerciseId}) {
  const page = pages[exerciseId]
  const {default: Usage, isolatedPath} = pages[exerciseId][type]
  return (
    <div>
      <div
        style={{
          marginLeft: 10,
          marginRight: 10,
          marginTop: 10,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link to={`/${exerciseId}`}>
          <span role="img" aria-label="back">
            👈
          </span>
          Exercise Page
        </Link>
        <a href={isolatedPath}>isolated</a>
      </div>
      <div style={{textAlign: 'center'}}>
        <h1>{page.title}</h1>
      </div>
      <div
        style={{
          flex: 1,
          padding: 20,
          margin: 20,
          border: '1px solid',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Usage />
      </div>
      <NavigationFooter exerciseId={exerciseId} type={type} />
    </div>
  )
}

function Isolated({loader}) {
  const Component = React.useMemo(() => React.lazy(loader), [loader])
  return (
    <div
      style={{
        padding: 30,
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        <Component />
      </div>
    </div>
  )
}

function Home() {
  return (
    <div style={{maxWidth: 800, margin: '50px auto 0px auto'}}>
      <h1 style={{textAlign: 'center'}}>React Fundamentals</h1>
      <div>
        {filesAndTitles.map(({title, filename}) => {
          return (
            <div key={filename} style={{margin: 10}}>
              {filename}
              {'. '}
              <Link to={`/${filename}`}>{title}</Link>{' '}
              <small>
                <Link to={`/${filename}/exercise`}>(exercise)</Link>{' '}
                <Link to={`/${filename}/final`}>(final)</Link>
              </small>
            </div>
          )
        })}
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
      <Home path="/" />
      <ExerciseContainer path="/:exerciseId" />
      <FullPage path="/:exerciseId/exercise" type="exercise" />
      <FullPage path="/:exerciseId/final" type="final" />
      <NotFound default />
    </Router>
  )
}

// The reason we don't put the Isolated components as regular routes
// and do all this complex stuff instead is so the React DevTools component
// tree is as small as possible to make it easier for people to figure
// out what is relevant to the example.
function App() {
  const [location, setLocation] = React.useState(history.location)
  React.useEffect(() => {
    return history.listen(l => setLocation(l))
  }, [])
  const {pathname} = location
  let ui = <Routes />
  if (pathname.startsWith('/isolated')) {
    const moduleName = pathname.split('/').slice(-1)[0]
    if (pathname.includes('-final')) {
      ui = <Isolated loader={() => import(`./exercises-final/${moduleName}`)} />
    } else {
      ui = <Isolated loader={() => import(`./exercises/${moduleName}`)} />
    }
  }
  return <React.Suspense fallback={<div>Loading...</div>}>{ui}</React.Suspense>
}

export default App
