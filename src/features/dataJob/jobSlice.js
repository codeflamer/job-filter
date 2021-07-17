import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    jobData:null,
    filter:false,
    filterParam:[],
    filteredData:null
}

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobdata: (state,action) => {
      state.jobData = action.payload;
    },
    setFilter: (state,action) => {
        state.filter = action.payload;
    },
    setFilterParam: (state,action) => {
        state.filterParam = action.payload;
    },
    setFilteredData: (state,action) => {
        state.filteredData = action.payload;
    },
    }
})

// Action creators are generated for each case reducer function
export const { setJobdata,setFilter,setFilterParam,setFilteredData } = jobSlice.actions;

export const callJobData = (state) => state.jobs.jobData;
export const callFilter = (state) => state.jobs.filter;
export const callFilterParam = (state) => state.jobs.filterParam;
export const callFilteredData = (state) => state.jobs.filteredData;

export default jobSlice.reducer;