import createSagaMiddleware from "@redux-saga/core"
import { configureStore } from "@reduxjs/toolkit"
import reducers from "../reducers"
import saga from "../sagas/index"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: reducers,
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(saga)

export default store
