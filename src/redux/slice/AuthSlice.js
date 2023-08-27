import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../axios'

const initialState = {
  user: null,
  status: 'loading'
}

//получение токена
export const fetchLogin = createAsyncThunk('user/fetchAuth', async (params) => {
  const {data} = await axios.post('/login', params);
  return data;
})

//для получения информации об авторизованном пользователе
export const fetchMe = createAsyncThunk('user/fetchMe', async () => {
  const {data} = await axios.get('/me');
  return data;
})

//в reducer обрабатываем ответ c бэка
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null
    }
  },
  extraReducers: {
    [fetchLogin.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.status = 'loaded';
    },
    [fetchLogin.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
    },
    
    [fetchMe.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMe.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = 'loaded';
    },
    [fetchMe.rejected]: (state) => {
      state.user = null;
      state.status = 'error';
    }
  }
});

export const isAuth = (state) => Boolean(state.auth.user)

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
