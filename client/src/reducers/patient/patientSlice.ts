import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PatientType } from "./patient";
import {
  bulkCreatePatient,
  deletePatient,
  getPatientById,
  getPatientDetailsById,
  updatePatient,
} from "../../api/patientAPI";
import {
  deleteLabTestByPatient,
  deletePatientLabTest,
  getLabTestByPatient,
  getLabTestByPatientAndTest,
} from "../../api/patientLabTestAPI";
import {
  deleteLabTestFieldByPatient,
  deletePatientLabTestFIeld,
  getLabTestFieldByPatient,
  updateResult,
} from "../../api/patientLabTestField";
import { getLabTestNotByPatient } from "../../api/labTestAPI";
import { ec_care_patient } from "../../entity/ec_care_patient";
import {
  deletePatientXrayTest,
  getAllPatientXrayTestByPatient,
  updatePatientXrayTest,
} from "../../api/patientXrayTestAPI";
import {
  getAllXrayTestByPatient,
  getAllXrayTestNotByPatient,
} from "../../api/xrayTestAPI";
import ec_care_patientXrayTest from "../../entity/ec_care_patientXrayTest";

const initialState: PatientType = {
  patient: {
    id: null,
    fullName: null,
    birthday: null,
    age: null,
    gender: null,
    dateOfVisit: new Date().toISOString().split("T")[0],
    email: null,
    phone: null,
    company: null,
    status: null,
    created_at: null,
    updated_at: null,
  },
  patientLabTest: [],
  patientLabTestField: [],
  patientForm: {
    id: null,
    fullName: null,
    birthday: null,
    age: null,
    gender: null,
    dateOfVisit: null,
    email: null,
    phone: null,
    company: null,
    tests: [],
  },
  patientTestsFields: [],
  pattientXrayTests: [],
  selectedPatientXrayTest: {
    id: null,
    lms_patient_id: null,
    lms_xrayTest_id: null,
    result: null,
    idNum: null,
    description: null,
    testDate: null,
    status: null,
    created_at: null,
    updated_at: null,
  },
  xrayTests: [],
  patientLabTestId: 0,
  labTest: [],
  xrayTest: [],
  testId: 0,
  selectedTestField: null,
  patientId: 0,
  paperSize: "legal",
  medTech: 0,
  addTestModal: false,
  patientUpdateModal: false,
  addImagintTestModal: false,
  loading: false,
  status: "idle",
  error: null,
};

export const fetchPatientById = createAsyncThunk(
  "patient/fetchPatientbyId",
  async (patientId: number) => {
    const response = await getPatientById(patientId);
    return response;
  }
);

export const fetchPatientDetailsById = createAsyncThunk(
  "patient/fetchPatientDetailsById",
  async (patientId: number) => {
    const response = await getPatientDetailsById(patientId);
    return response;
  }
);

export const fetchLabTestByPatient = createAsyncThunk(
  "patient/fetchLabTestByPatient",
  async (patientId: number) => {
    const response = await getLabTestByPatient(patientId);
    return response;
  }
);

export const fetchLabTestFieldByPatient = createAsyncThunk(
  "patient/fetchLabTestFieldByPatient",
  async (data: { patientId: number; testId: number }) => {
    const response = await getLabTestFieldByPatient(
      data.patientId,
      data.testId
    );
    return response;
  }
);

export const fetchLabTestNotByPatient = createAsyncThunk(
  "patient/fetchLabTestNotByPatient",
  async (patientId: number) => {
    const response = await getLabTestNotByPatient(patientId);
    return response;
  }
);

export const fetchLabTestByPatientAndTest = createAsyncThunk(
  "patient/fetchLabTestByPatientAndTest",
  async (params: { patientId: number; labTestId: number }) => {
    const response = await getLabTestByPatientAndTest(
      params.patientId,
      params.labTestId
    );
    return response;
  }
);

export const fetchPatientXrayTestsByPatient = createAsyncThunk(
  "patient/fetchPatientXrayTestsByPatient",
  async (patientId: number) => {
    const response = await getAllPatientXrayTestByPatient(patientId);
    return response;
  }
);

export const fetchXrayTestByPatient = createAsyncThunk(
  "patient/fetchXrayTestByPatient",
  async (patientId: number) => {
    const response = await getAllXrayTestByPatient(patientId);
    return response;
  }
);

export const fetchXrayTestNotByPatient = createAsyncThunk(
  "patient/fetchXrayTestNotByPatient",
  async (patientId: number) => {
    const response = await getAllXrayTestNotByPatient(patientId);
    return response;
  }
);

export const bulkAddPatient = createAsyncThunk(
  "patient/bulkAddPatient",
  async (newPatient: ec_care_patient[]) => {
    const response = await bulkCreatePatient(newPatient);
    return response;
  }
);

export const updatePatientLabTestField = createAsyncThunk(
  "patient/updatePatientLabTestField",
  async (result: any[]) => {
    const response = await updateResult(result);
    return response;
  }
);

export const updatePatientInfo = createAsyncThunk(
  "patient/updatePatientInfo",
  async (patient: ec_care_patient) => {
    const response = await updatePatient(patient);
    return response;
  }
);

export const editPatientXrayTest = createAsyncThunk(
  "patient/editPatientXrayTest",
  async (newPatientXrayTest: ec_care_patientXrayTest[]) => {
    const response = await updatePatientXrayTest(newPatientXrayTest);
    return response;
  }
);

export const removePatientLabTestField = createAsyncThunk(
  "patient/removePatientLabTestField",
  async (lms_patient_labTest_id: number) => {
    const response = await deletePatientLabTestFIeld(lms_patient_labTest_id);
    return response;
  }
);

export const removePatientLabTest = createAsyncThunk(
  "patient/removePatientLabTest",
  async (params: { lms_patient_id: number; lms_labTest_id: number }) => {
    const response = await deletePatientLabTest(
      params.lms_patient_id,
      params.lms_labTest_id
    );
    return response;
  }
);

export const removeLabTestByPatient = createAsyncThunk(
  "patient/removeLabTestByPatient",
  async (patientId: number) => {
    const response = await deleteLabTestByPatient(patientId);
    return response;
  }
);

export const removeLabTestFieldByPatient = createAsyncThunk(
  "patient/removeLabTestFieldByPatient",
  async (patientId: number) => {
    const response = await deleteLabTestFieldByPatient(patientId);
    return response;
  }
);

export const removePatientById = createAsyncThunk(
  "patient/removePatientById",
  async (patientId: number) => {
    const response = await deletePatient(patientId);
    return response;
  }
);

export const removePatientXrayTest = createAsyncThunk(
  "patient/removePatientXrayTest",
  async (id: number) => {
    const response = await deletePatientXrayTest(id);
    return response;
  }
);

const patientSlice = createSlice({
  name: "patient",
  initialState: initialState,
  reducers: {
    setPatientId: (state, action) => {
      state.patientId = action.payload;
    },
    handleOnChangeResult: (state, action) => {
      const findTest: any = state.patientForm.testFields?.find(
        (d: any) => d.id === action.payload.testId
      );
      findTest.labTestFields = action.payload.updatedResults;
      state.patientLabTestField = action.payload.updatedResults;
    },
    setPatientDetails: (state, action) => {
      state.patientLabTestField = action.payload;
    },
    setFieldToPatient: (state, action) => {
      const findTest = state.patientForm.testFields?.find(
        (d: any) => d.id === action.payload.testId
      );
      findTest.labTestFields = action.payload.testFields;
    },
    setTestId: (state, action) => {
      state.testId = action.payload;
    },
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setPaperSize: (state, action) => {
      state.paperSize = action.payload;
    },
    setMedTech: (state, action) => {
      state.medTech = action.payload;
    },
    openAddTestModal: (state) => {
      state.addTestModal = !state.addTestModal;
    },
    onUpdateModal: (state) => {
      state.patientUpdateModal = !state.patientUpdateModal;
    },
    setPatientInfo: (state, action) => {
      state.patient = {
        ...state.patient,
        [action.payload.name]: action.payload.value,
      };
    },
    setAge: (state, action) => {
      state.patient.age = action.payload;
    },
    setSelectedPatientXrayTest: (state, action) => {
      state.selectedPatientXrayTest = action.payload;
    },
    setPatientXrayTest: (state, action) => {
      state.pattientXrayTests = action.payload;
    },
    setAddImagingModal: (state) => {
      state.addImagintTestModal = !state.addImagintTestModal;
    },
    clearFields: (state) => {
      state.patient = {
        id: null,
        fullName: null,
        birthday: null,
        age: null,
        gender: null,
        dateOfVisit: null,
        email: null,
        phone: null,
        company: null,
        status: null,
        created_at: null,
        updated_at: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPatientById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patient = action.payload;
      })
      .addCase(fetchPatientById.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientLabTest = action.payload;
      })
      .addCase(fetchLabTestByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestFieldByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestFieldByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";

        for (var i = 33; i <= 39; i++) {
          const findField = action.payload.find((d) => d.fieldId === i);

          if (findField !== undefined) {
            findField.result = "NONE SEEN";
          }
        }

        state.patientLabTestField = action.payload;
      })
      .addCase(fetchLabTestFieldByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchPatientDetailsById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientDetailsById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientForm = action.payload;
      })
      .addCase(fetchPatientDetailsById.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(updatePatientLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePatientLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePatientLabTestField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestNotByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestNotByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.labTest = action.payload;
      })
      .addCase(fetchLabTestNotByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientLabTestField.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientLabTestField.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientLabTestField.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientLabTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientLabTest.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientLabTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchLabTestByPatientAndTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLabTestByPatientAndTest.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.patientLabTestId = action.payload;
      })
      .addCase(fetchLabTestByPatientAndTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(updatePatientInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePatientInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updatePatientInfo.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removeLabTestByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeLabTestByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removeLabTestByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removeLabTestFieldByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeLabTestFieldByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removeLabTestFieldByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientById.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientById.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchPatientXrayTestsByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPatientXrayTestsByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pattientXrayTests = action.payload;
      })
      .addCase(fetchPatientXrayTestsByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchXrayTestByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchXrayTestByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.xrayTests = action.payload;
      })
      .addCase(fetchXrayTestByPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(editPatientXrayTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPatientXrayTest.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(editPatientXrayTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(removePatientXrayTest.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removePatientXrayTest.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(removePatientXrayTest.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(bulkAddPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(bulkAddPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(bulkAddPatient.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(fetchXrayTestNotByPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchXrayTestNotByPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.xrayTest = action.payload;
      })
      .addCase(fetchXrayTestNotByPatient.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  setPatientId,
  handleOnChangeResult,
  setPatientDetails,
  setFieldToPatient,
  setTestId,
  setLoading,
  setPaperSize,
  setMedTech,
  openAddTestModal,
  onUpdateModal,
  setPatientInfo,
  setAge,
  clearFields,
  setSelectedPatientXrayTest,
  setPatientXrayTest,
  setAddImagingModal,
} = patientSlice.actions;

export default patientSlice.reducer;
