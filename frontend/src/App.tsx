import '@mantine/core/styles.css';
import './App.css'
import {AppShell, MantineProvider} from "@mantine/core";
import Header from "./Components/Header.tsx";
import Text1 from "./Components/Text1.tsx";

function App() {

    return (
        <MantineProvider>
            <AppShell
                header={{ height: 60 }}
                padding="md"
            >
                <Header/>


                <AppShell.Main>
                    main text demo
                    <Text1/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    )
}

export default App
