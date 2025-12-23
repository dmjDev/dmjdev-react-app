import ListMap from "./components/ListMap"                      // IMPORTACION DE COMPONENTE
import { ListMapProvider } from "./context/ListMapProvider"     // IMPORTACION DE CONTEXT PROVIDER

import { UsersApp } from "./components/UsersApp/UsersApp"
import { UsersAppProvider } from "./context/UsersAppProvider"

export const App = () => {
  const html =
    <main>
      <UsersAppProvider>
        <UsersApp />
      </UsersAppProvider>
      {/* <ListMapProvider>
        <ListMap />
      </ListMapProvider> */}
    </main>
  return html
}

