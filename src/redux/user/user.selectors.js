import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
)

export const selectIsSigningUp = createSelector(
    [selectUser],
    (user) => user.isSigningUp
)

export const selectIsSigningIn = createSelector(
    [selectUser],
    (user) => user.isSigningIn
)