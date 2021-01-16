// Styling
// 💯 accept a size prop to encapsulate styling
// http://localhost:3000/isolated/final/05.extra-2.js

import * as React from 'react'
import '../box-styles.css'

//#region Box
interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * an optional property defining all the possible sizes that the box
   * can accepts
   */
  size?: 'small' | 'medium' | 'large'

  /**
   * `style` prop is already defined in the `Rect.HTMLAttributes<HTMLDivElement>`
   * type definition
   */
  // style?: React.CSSProperties

  /**
   * `className` prop is already defined int the
   * `Rect.HTMLAttributes<HTMLDivElement>` type definition
   */
  // className?: string

  /**
   * `children` Prop is already included in the `React.FC<T>` type definition
   */
  // children?: React.ReactNode
}

/**
 * `React.FC` stans for React `(F)unctional (C)omponent` and is the shorthand
 * of  `React.FunctionComponent`:
 *
 * It is a Generic type definition provided by the Reacts types that enables
 * easy tying of the component signature:
 *
 * ```typescript
 *  // 'node_modules/@types/react/index.d.ts@FC'
 *  type FC<P = {}> =FunctionComponent<P>
 *
 *  interface FunctionComponent<P = {}> {
 *    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
 *    propTypes?: WeakValidationMap<P>;
 *    contextTypes?: ValidationMap<any>;
 *    defaultProps?: Partial<P>;
 *    displayName?: string;
 *  }
 * ```
 *
 * It takes an optional type argument `P` representing the `Props` type that
 * the component accept. It also enhance/extends said Props by adding an
 * optional `children` property, so that you are not required to add it
 * manually; thought you can always override it.
 */
const Box: React.FC<BoxProps> = ({
  style = null,
  size,
  className = '',
  children,
  ...otherProps
}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    >
      {children}
    </div>
  )
}
//#endregion Box

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
    <Box size="small" style={{backgroundColor: 'lightblue'}}>
      small lightblue box
    </Box>
    <Box size="medium" style={{backgroundColor: 'pink'}}>
      medium pink box
    </Box>
    <Box size="large" style={{backgroundColor: 'orange'}}>
      large orange box
    </Box>
    <Box>sizeless box</Box>
  </div>
)

//#endregion App

export default App
