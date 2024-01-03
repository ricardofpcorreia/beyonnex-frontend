# beyonnex-frontend - Temperature gauge component

This project includes a reusable React component that displays a Temperature gauge. The gauge shows the current temperature with a needle indicating the value on a circular track.

## Features

- A circular gauge representing the temperature scale.
- A needle that moves to indicate the current temperature.
- The current temperature is displayed in text below the gauge.

## Props

The `TemperatureGauge` component accepts the following props:

- `initialMinTemp` (number): The minimum value on the temperature scale.
- `initialMaxTemp` (number): The maximum value on the temperature scale.
- `initialCurrentTemp` (number): The current temperature value to display.

## Customization

You can customize the look and feel of the gauge by modifying the Tailwind CSS classes or applying additional styles as needed.

## Testing

To test the component, run your React application by executing:

```bash
npm start
```

Your application should open in your web browser, displaying the Temperature gauge with the initial temperatures you've set.

## License

This project is open-sourced under the MIT license.
