import type { AllDocsMap, AllTypeDocsSelected } from "./docs/section";
import type { AllStdMap, AllTypeStdSelected } from "./stdMethod/section";


// Gabungkan semua object map dengan & atau Record
export type AllPartialSectionSelected = Partial<AllDocsMap & AllStdMap>;

// gabungan lebih banyak untuk semua jenis type type selected dengan |
export type AllTypeSectionSelected = AllTypeDocsSelected | AllTypeStdSelected;
