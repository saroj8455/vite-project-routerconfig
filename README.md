# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Backup App Component

```jsx
function App() {
  return (
    <>
      <div className='min-h-screen flex flex-column surface-ground'>
        {/* Navbar  */}
        <Navbar />
        {/* Content Goes Here like Outlet */}
        <div className='flex flex-column flex-auto'>
          <div className='border-2 border-dashed surface-border border-round surface-section ' />
          <Home />
        </div>
        <Footer />
      </div>

      {/* <Navbar />
      <Home />
      <Footer /> */}
    </>
  );
}
```

## Basic Card Template

```jsx
<div className='px-4 py-8 md:px-6 lg:px-8 flex gap-2 justify-content-center align-items-center'>
  <div className='surface-card w-6 sm:w-max border-round shadow-2 p-4'>
    <p className='text-center text-6xl font-bold'>Hello World App!</p>
    <p className='text-center font-bold'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos,
      odio consequatur, blanditiis quidem maxime alias error, voluptas magni
      fugiat eaque! Ullam, nisi molestias deleniti consequuntur dolorem
      doloribus veritatis sunt.
    </p>
    <div className='card flex justify-content-center'>
      <Button label='Show me a different post' />
    </div>
  </div>
</div>
```

## Print the date {JSON.stringify(date)}

```jsx
{
  JSON.stringify(date);
}
```
