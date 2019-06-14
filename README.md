# rn-floating-button


## Usage

```jsx
    <FloatingButton
        iconName="share"
        onPress={somefunction}
        right={10}
        bottom={40}
        buttonColor="#00f"
        iconColor="#fff"
    />
```

## Properties

 Name           | Description                                 | Type     | Required  | Default value   
:---------------|:------------------------------------------- |:---------|:---------:|:--------------
 iconName       | Icon name from `react-native-vector-icons/MaterialCommunityIcons` | string   |       | plus          
 onPress        | Callback when the component is pressed      | function | yes       |           
 right          | Spacing from right screen edge              | number   |           | 10          
 bottom         | Spacing from bottom screen edge             | number   |           | if `iphoneX` 80, otherwise 40          
 buttonColor    | Color of the button                         | string   |           | #00f          
 iconColor      | Color of the button icon                    | string   |           | #fff          
