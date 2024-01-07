import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { LabTestType } from "./labTest";
import { createField, retrieveAllField } from "../../api/fieldAPI";
import ec_care_labTest from "../../entity/ec_care_labTest";
import { createLabTest, getLabTest } from "../../api/labTestAPI";
import ec_care_field from "../../entity/ec_care_field";
import ec_care_labTest_field from "../../entity/ec_care_labTestField";
import { createLabTestField, getLabTestField } from "../../api/labTestFieldAPI";

const initialState: LabTestType = {
  field: [],
  addField: [],
  addedField: [],
  labTest: {
    id: null,
    name: null,
    description: null,
    type: null,
    price: null,
    status: null,
    created_at: null,
    updated_at: null,
  },
  labTests: [],
  labTestField: [],
  isLabTestError: false,
  status: "idle",
  error: null,
};

export const fetchAllField = createAsyncThunk(
  "labTest/fetchAllField",
  async () => {
    const response = await retrieveAllField();
    return response;
  }
);

export const fetchLabTests = createAsyncThunk(
  "labTest/fetchAllLabTests",
  async () => {
    const response = await getLabTest();
    return response;
  }
);

export const fetchAllLabTestField = createAsyncThunk(
  "labTest/fetchAllLabTestField",
  async () => {
    const response = await getLabTestField();
    return response;
  }
);

export const addLabTestField = createAsyncThunk(
  "labTest/addLabTestField",
  async (newLabTestField: ec_care_labTest_field) => {
    const response = await createLabTestField(newLabTestField);
    return response;
  }
);

export const addLabTest = createAsyncThunk(
  "labTest/addLabTest",
  async (newLabTest: ec_care_labTest) => {
    const response = await createLabTest(newLabTest);
    return response;
  }
);

const labTestSlice = createSlice({
  name: "labTest",
  initialState: initialState,
  reducers: {
    setAddField: (state, action) => {
      state.addField = [...state.addField, action.payload];
    },
    setAddedField: (state, action) => {
      state.addedField = [...state.addedField, action.payload];
    },
    setLabTest: (state, action) => {
      state.labTest = {
        ...state.labTest,
        [action.payload.name]: action.payload.value,
      };
    },
    setLabTestError: (state, action) => {
      state.isLabTestError = action.payload;
    },
    removeAddedField: (state, action) => {
      const indexToRemove = state.addedField.findIndex(
        (item) => item.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.addedField = state.addedField.filter(
          (item, index) => index !== indexToRemove
        );
      }
    },
    cleanLabTest: (state) => {
      state.addField = [];
      state.addedField = [];
      state.labTest = {
        id: null,
        name: null,
        description: null,
        type: null,
        price: null,
        status: null,
        created_at: null,
        updated_at: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAllField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllField.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.field = action.payload;
      })
      .addCase(fetchAllField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(addLabTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLabTest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTests.push(action.payload);
      })
      .addCase(addLabTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(addLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTestField.push(action.payload);
      })
      .addCase(addLabTestField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTests.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTests.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTests = action.payload;
      })
      .addCase(fetchLabTests.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchAllLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTestField = action.payload;
      })
      .addCase(fetchAllLabTestField.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  setAddField,
  setAddedField,
  setLabTest,
  removeAddedField,
  setLabTestError,
  cleanLabTest,
} = labTestSlice.actions;

export default labTestSlice.reducer;
