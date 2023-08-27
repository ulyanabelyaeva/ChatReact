import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from '../../axios'

const initialState = {
  users: {
    items: [],
    status: 'loading'
  }
}

//регистрация нового пользователя
export const fetchRegistrationParticipant = createAsyncThunk('user/fetchRegistrationParticipant', async (params) => {
  await axios.post('/registration/participant', params);
})

//регистрация новой команды
export const fetchRegistrationTeam = createAsyncThunk('user/fetchRegistrationTeam', async (params) => {
  await axios.post('/registration/team', params);
})

//получение участников команды
export const fetchTeam = createAsyncThunk('user/fetchTeam', async () => {
  const {data} = await axios.get('/get/participants');
  return data;
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [fetchTeam.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTeam.fulfilled]: (state, action) => {
      state.users.items = action.payload;
      state.status = 'loaded';
    },
    [fetchTeam.rejected]: (state) => {
      state.users.items = null;
      state.status = 'error';
    }
  }
});

export const userReducer = userSlice.reducer;