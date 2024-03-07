# solid-fontawesome

A SolidJS component for the font-awesome icon library.

## How to Use

This is intended to work just like the react-fontawesome component.  
Official docs for that component can be found [here](https://fontawesome.com/v6/docs/web/use-with/react/).

Instead of Step 3 on that page, "Add the React Component". You should:

### Add the Solid Component

```bash
npm install solid-fontawesome
```

This library does not support babel-macros or a few of the "alternative" methods of adding icons. It only supports the "[Globally](https://fontawesome.com/v6/docs/web/use-with/react/add-icons#add-icons-globally)" option at this time.

## Supported Props <sup><sub>work in progress</sub></sup>

✅ icon: string  
✅ size?: SizeProp  
▢ mask?: IconProp  
▢ maskId?: string  
✅ class?: string  
> equivalent of `className` in the react component  
>   
▢ color?: string  
▢ spin?: boolean  
▢ spinPulse?: boolean  
▢ spinReverse?: boolean  
▢ pulse?: boolean  
▢ beat?: boolean  
▢ fade?: boolean  
▢ beatFade?: boolean  
▢ bounce?: boolean  
▢ shake?: boolean  
▢ border?: boolean  
▢ fixedWidth?: boolean  
✅ inverse?: boolean  
> instead of making the icon white, this library truly inverts the `currentColor`.  
> That way it more easily works with dark or custom themes.  

▢ listItem?: boolean  
▢ flip?: FlipProp  
▢ pull?: PullProp  
▢ rotation?: RotateProp  
▢ transform?: string | Transform  
▢ symbol?: FaSymbol  
▢ style?: any  
▢ tabIndex?: number  
▢ title?: string  
▢ titleId?: string  
✅ swapOpacity?: boolean
