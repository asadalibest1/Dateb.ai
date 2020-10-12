import React from 'react'

export default function App() {
    const slug = "[THE INITIAL RENDERED SLUG]";

    return (
        <Provider slug={slug}>
        <Header />
        <NavigationSlider />
      </Provider>
    )
}
