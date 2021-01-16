// Styling
// http://localhost:3000/isolated/final/05.tsx

import * as React from 'react'
import '../box-styles.css'

const smallBox: JSX.Element = (
  <div
    className="box box--small"
    style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
  >
    small lightblue box
  </div>
)

const mediumBox: JSX.Element = (
  <div
    className="box box--medium"
    style={{fontStyle: 'italic', backgroundColor: 'pink'}}
  >
    medium pink box
  </div>
)

const largeBox: JSX.Element = (
  <div
    className="box box--large"
    style={{fontStyle: 'italic', backgroundColor: 'orange'}}
  >
    large orange box
  </div>
)

//#region App
/**
 * `React.VFC` stands for `(V)oid (F)unctional (C)omponent` and is the shorthand
 * of  `React.VoidFunctionComponent`:
 *
 * It is a Generic type definition provided by the Reacts types that enables
 * easy tying of the component signature:
 *
 * ```typescript
 *  // 'node_modules/@types/react/index.d.ts@VFC'
 *  type VFC<P = {}> = VoidFunctionComponent<P>;
 *
 *  interface VoidFunctionComponent<P = {}> {
 *    (props: P, context?: any): ReactElement<any, any> | null;
 *    propTypes?: WeakValidationMap<P>;
 *    contextTypes?: ValidationMap<any>;
 *    defaultProps?: Partial<P>;
 *    displayName?: string;
 *  }
 * ```
 *
 * The `Void` in the type name refers to the fact that this component
 * explicity does not accepts any `children`, though you can still pass in your
 * custom Props as an argument.
 */
const App: React.VFC = () => (
  <div>
    {smallBox}
    {mediumBox}
    {largeBox}
  </div>
)
//#endregion App

export default App
