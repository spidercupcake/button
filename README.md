# Perfect React Button

A highly customizable, accessible, and performant Button component that offers a flexible way to create interactive buttons that cater to various design needs while ensuring a consistent user experience. By allowing customization through dynamic attributes, it empowers developers to craft UI elements that are visually appealing and functional.

## Features

### Dynamic Attributes

The Button component is highly customizable, allowing developers to dynamically pass various attributes:

- `primaryColor` : Sets the primary color of the button.
- `text` : Specifies the text displayed on the button.
- `icon` : Allows an icon to be included.
- `hoverShade` : Controls the color change on hover (options: "godarker" or "golighter").
- mode : Determines the button's visual style (options: "ghost", "transparent", "filled").
- `isCircular` : When set to true, the button has rounded corners; if width and height are equal, it becomes a perfect circle.
- `width and height` : Define the button’s dimensions.

### Modes

The button can adapt its appearance and behavior based on the specified mode:

1: Ghost Mode:

- Initial State: The button starts as transparent with no borders. The text and icon use the passed `primaryColor`.

- On Hover: The background becomes a translucent version of the `primaryColor`, either darker or lighter depending on the `hoverShade` property.

2: Transparent Mode:

- Initial State: The button has a transparent background, with the text/icon and border in the `primaryColor`.

- On Hover: The background fills with the `primaryColor`, and the text/icon changes to a darker or lighter shade based on the `hoverShade`.

3: Filled Mode:

- Initial State: The button features a solid background in the `primaryColor` with transparent text/icon.

- On Hover: The background becomes either darker or lighter based on the `hoverShade`.

### Circular Mode:

- If `isCircular` is set to true, the button will have rounded corners. If the button’s width and height are the same, it will form a perfect circle.

- If the `isCircular` attribute is not provided, the button will default to standard corners.

## Installation

```bash
npm  install  perfect-react-button
```

or

```bash
yarn  add  perfect-react-button
```

## Usage

```tsx
import React from "react";
import { Button } from "perfect-react-button";
import { Heart } from "lucide-react";

export default function App() {
  return (
    <Button
      color="#e74c3c"
      text="Like"
      icon={<Heart />}
      mode="ghost"
      hoverEffect="lighten"
      onClick={() => console.log("Button clicked")}
    />
  );
}
export default App;
```

## Props

| Prop         | Type                           | Default    | Description                                     |
| ------------ | ------------------------------ | ---------- | ----------------------------------------------- |
| primaryColor | string                         | none       | The primary color of the button (required)      |
| text         | string                         | none       | The text to display on the button               |
| icon         | React.ReactNode                | none       | An icon to display on the button                |
| mode         | `ghost` `transparent` `filled` | `filled`   | The visual style of the button                  |
| hoverShade   | `godarker` `golighter`         | `godarker` | The hover effect style                          |
| isCircular   | boolean                        | false      | Whether the button should have circular corners |
| width        | string                         | auto       | The width of the button                         |
| height       | string                         | auto       | The height of the button                        |
| onClick      | Function                       | none       | The function to call when the button is clicked |

## Examples

### Ghost Button

```tsx
<Button
  color="#3498db"
  text="Ghost Button"
  mode="ghost"
  onClick={() => console.log("Ghost button clicked")}
/>
```

### Transparent Button

```tsx
<Button
  color="#2ecc71"
  text="Transparent Button"
  mode="transparent"
  hoverEffect="darken"
  onClick={() => console.log("Transparent button clicked")}
/>
```

### Filled Button

```tsx
<Button
  color="#e74c3c"
  text="Filled Button"
  mode="filled"
  onClick={() => console.log("Filled button clicked")}
/>
```

### Circular Button with Icon

```tsx
<Button
  color="#f39c12"
  icon={<Heart />}
  mode="filled"
  isCircular={true}
  width="50px"
  height="50px"
  onClick={() => console.log("Circular button clicked")}
/>
```

## Contributing

We welcome contributions!
