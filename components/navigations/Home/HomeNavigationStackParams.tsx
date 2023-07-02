export type HomeNavigationStackParams = {
    HomeScreen: undefined,
    AddScreen: undefined,
    CalculationScreen: {
        loops: string,
        minimumNumber: string,
        maximumNumber: string,
        runLoop: boolean,
    }
    SubstractionScreen: undefined,
    SubstractionCalculationScreen: Calculation,
    MultiplicationsScreen: undefined,
    MultiplicationsCalculationScreen: Calculation,
}

interface Calculation {
    loops: string,
    minimumNumber: string,
    maximumNumber: string,
}
