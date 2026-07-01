import { all } from 'redux-saga/effects';
import { notifyUserSaga } from './sagas/notify';

export default function* rootSaga() {
  yield all([
    notifyUserSaga(),
  ]);
}