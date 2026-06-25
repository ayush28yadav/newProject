# Prop Drilling and Context API

The app passes `name` and `rollno` from `App.jsx` through `Child1` and `Child2` to `Child3`.

This is prop drilling: components pass props they do not use directly.

## Fix with Context API

1. Create `UserContext`:

```jsx
import { createContext } from 'react';
export const UserContext = createContext(null);
```

2. Provide the data in `App.jsx`:

```jsx
<UserContext.Provider value={{ name: 'Ayush', rollno: 21 }}>
  <Child1 />
</UserContext.Provider>
```

3. Consume context in `Child3`:

```jsx
const { name, rollno } = useContext(UserContext);
```

After this, `Child1` and `Child2` do not need to forward `name` and `rollno`.
