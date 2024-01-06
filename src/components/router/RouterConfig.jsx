import TestContent from "../../pages/TestContent"
import TestError from "../../pages/TestError"

export const ROUTES = [
    {
        path: "test",
        element: <TestContent />,
        title: "Test"
    },
    {
        path: "*",
        element: <TestError />,
        title: "error"
    }
]