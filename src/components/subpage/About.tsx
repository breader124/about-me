import {Divider, List, Stack, Table, Text} from "@mantine/core";

const elements = [
    {
        what: "Serwis może być zrealizowany na bazie HTML 4.01 lub XHTML (dopuszczalne jest też użycie XML+XSLT). Strony muszą być utworzone poprawnie i mieć poprawne deklaracje typu – będą przepuszczane przez walidator w ramach testu.",
        isSuccessful: "Tak",
        why: "Serwis został zrealizowany na bazie HTML 5, zgodnie z odpowiedzią prowadzącego na Forum Dyskusyjnym, z której wynikało, że można (a nawet należy) stosowac ten standard. Wygenerowany HTML pomyślnie przeszedł test wykonany za pomocą walidatora."
    },
    {
        what: "Wymagane jest nietrywialne formatowanie przy użyciu CSS. Poprawność reguł CSS również będzie sprawdzana walidatorem.",
        isSuccessful: "Tak/Nie",
        why: "Wykorzystano bibliotekę zawierającą gotowe komponenty wizualne do wykorzystania w projektach bazujących na React - Mantine UI. Komponenty te posiadają już odpowiednie ostylowanie, natomiast zostało ono dostosowane do indywidualnych wymagań projektu."
    },
    {
        what: "Kompatybilność i „łagodna degradacja” - serwis powinien funkcjonować poprawnie i wyglądać dobrze we wszystkich popularnych przeglądarkach (najnowsze wersje), a korzystanie z serwisu powinno być też możliwe – choć zapewne nie bez zakłóceń w rodzaju nieudanego formatowania – w przeglądarkach starszych lub bardziej prymitywnych pod względem możliwości prezentacyjnych (np. lynx). W przypadku podjęcia decyzji o użyciu XHTML 1.1 wystarczy obsługa przez przeglądarki respektujące ten standard.",
        isSuccessful: "Tak",
        why: "Biblioteka Mantine zapewnia, że komponenty będą wyglądac dobrze na wszystkich nowych wersjach najpopularniejszych bibliotek. W celu zapewnienia wsparcia zainstalowany oraz zaimportowane zostało rozwiązanie polyfill w postaci biblioteki core-js. Oddaje ona zachowanie funkcjonalności wprowadzonych w późniejszych wersjach JSa i Reacta także w starszych przeglądarkach, które zostały wydane wcześniej."
    },
    {
        what: "Dostępność dla niepełnosprawnych – w szczególności powinna być możliwa nawigacja przy użyciu oprogramowania czytającego (a zatem wszystkie istotne obrazki powinny mieć teksty alternatywne, itp.). Oczywiście biorąc pod uwagę skalę projektu nie możemy przesadzać z rozmachem – np. nie jest wymagane dostarczenie reguł CSS dla medium aural.",
        isSuccessful: "Yes",
        why: "Strona została przetestowana z wykorzystaniem rozwiązania Lighthouse. Wynik dla dostępności osiągnął 100/100 punktów."
    },
    {
        what: "Poza (X)HTML i CSS serwis powinien wykorzystywać co najmniej jedną wybraną technologię spośród przedstawionych na wykładzie (np. skrypty po stronie serwera i/lub klienta, ciasteczka, bazy danych, web serwisy, SSL... - do wyboru)",
        isSuccessful: "Tak",
        why: "Strona jest hostowana z bucketa AWS S3. Dodatkowo, została ona wystawiona za pośrednictwem CDNa w postaci AWS CloudFront. Bucket S3 został skonfigurowany tak, aby uniemożliwić dostanie się do jakiegokolwiek obiektu inaczej niż przez CDNa. CloudFront z kolei umożliwia przeglądanie strony za pośrednictwem HTTPS. Podczas prób wejścia na stronę z protokołem HTTP, użytkownik jest przekierowywany tak, aby ostatecznie korzystał z protokołu HTTPS."
    },
    {
        what: "Serwis powinien zawierać dobrze przemyślany, wygodny i spójny system nawigacji. Co więcej, serwis powinien być na tyle duży, aby ten system miał sens – przypominamy o możliwości posiłkowania się wszelkiego rodzaju „materiałem zastępczym”.",
        isSuccessful: "Tak",
        why: "Strona została zaprojektowana z kilkoma podstronami dotyczącymi różnych aspektów. Na podstronie dotyczącej dotychczasowego przebiegu kariery występuje wspomniany w poleceniu 'materiał pomocniczy' w postaci tekstu Lorem Ipsum"
    },
    {
        what: "Przypominamy, że projektowany jest serwis internetowy, a więc strona, z której teoretycznie ktoś miałby korzystać. Nieczytelne zestawienia kolorów, mikroskopijne czcionki, migające irytująco obrazki itp. nie powinny występować – prosimy utworzyć stronę, która nie tyle próbuje pochwycić uwagę gościa (choć to pożądane), ile zaoferować mu wygodny dostęp do poszukiwanych treści./lub klienta, ciasteczka, bazy danych, web serwisy, SSL... - do wyboru)",
        isSuccessful: "Tak",
        why: "W kwestii projektu główny nacisk został postawiony na prostotę i spójne zaprezentowanie niezbędnych informacji. W kontekście opcjonalnych, graficznych funkcjonalności, użytkownikom został udostępniony zarówno ciemny, jak i jasny tryb strony. Można je swobodnie zmieniac korzystając z przycisku w prawym, górnym rogu ekranu."
    }
];

export const About = () => {
    const rows = elements.map((element) => (
        <tr key={element.what}>
            <td>{element.what}</td>
            <td>{element.isSuccessful}</td>
            <td>{element.why}</td>
        </tr>
    ));

    return (
        <Stack>
            <Divider my="md" label="Wykorzystane technologie" labelPosition="center"/>
            <List>
                <List.Item>Wersja HTML: HTML 5</List.Item>
                <List.Item>Język: TypeScript 4.9.5</List.Item>
                <List.Item>Biblioteka wspomagająca budowanie strony: React 18</List.Item>
                <List.Item>Biblioteka komponentów wizualnych: Mantine 6</List.Item>
                <List.Item>Zapewnienie wsparcia dla starszych przeglądarek (polyfills): core-js</List.Item>
                <List.Item>Hosting: Bucket AWS S3</List.Item>
                <List.Item>CDN: Dystrybucja AWS CloudFront</List.Item>
            </List>
            <Divider my="md" label="Założenia poczynione podczas projektowania nawigacji" labelPosition="center"/>
            <Text>
                Podczas projektowania nawigacji pierwotnym założeniem była prostota. Dlatego też składa się ona z
                prostych przycisków w delikatnej kolorystyce. Po lewej stronie posiadają one dodatkowo proste ikonki
                oznaczające, czego można się spodziewać po danym module strony. Każdy z przycisków ma też przypisaną
                nazwę, która może zostać przeczytana przez czytniki ekranu. Sprawia to, że strona jest bardziej dostępna
                dla osób z niepełnosprawnościami.
            </Text>
            <Divider my="md" label="Dlaczego projekt spełnia wymagania" labelPosition="center"/>
            <Table horizontalSpacing={"md"} verticalSpacing={"lg"}>
                <thead>
                <tr>
                    <th>Wymaganie</th>
                    <th>Czy się udało?</th>
                    <th>Uzasadnienie</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Stack>
    );
}

export default About;