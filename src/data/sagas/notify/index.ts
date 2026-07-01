import { call, put, takeLatest } from "redux-saga/effects";
import { notifyError, notifyMe, saveNotifyResponse } from "../../reducers/notify";
import { notifyUserApi } from "../../api/notify";

function* postNotifyUser(action: any) {
  try {
    const { data } = yield call(notifyUserApi, action.payload);
    yield put(saveNotifyResponse(data));
  } catch (error: any) {
    yield put(notifyError(error.message));
  }
}

export function* notifyUserSaga() {
  yield takeLatest(notifyMe.type, postNotifyUser);
}