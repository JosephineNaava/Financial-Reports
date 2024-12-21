# Financial-Reports
Financial reports display application.

*****************
OVERVIEW 
*****************

This is a simple financial report display application built with Vue.js 3, Vuetify for the UI, and Pinia for state management. It includes features like displaying financial reports, search and filter functionality, and exporting data in CSV, PDF, and Excel formats.

This project is part of a technical challenge for a Junior Frontend Developer role at Stat Solutions Research Network Ltd.

FEATURES
********
- Report Display:
  - Displays a list of financial reports with columns such as **Transaction ID, Date, Account Holder Name, Transaction Type, Amount, and Account Balance**.
  - Data is mocked through a dummy API endpoint (`http://localhost:5000/reports`).

- Search and Filter:
  - Allows users to filter reports by **Account Holder Name** and **Transaction Type**.
  - Filters are applied dynamically, updating the displayed list based on user input.

- Export Functionality:
  - Export the report data in the following formats:
    - CSV: Downloads a CSV file with all financial report data.
    - PDF: Generates a PDF file of the reports.
    - Excel: Creates an Excel file with all reports data.
  - Uses `jsPDF` and `XLSX` libraries for exporting functionalities.

- ## State Management:
  - Implemented using Pinia for managing the state of reports data. This allows for a clean and modular state management approach.

GETTING STARTED
****************

Prerequisites

- Ensure you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js website](https://nodejs.org/).
- It is recommended to have a Vue.js development environment setup (e.g., Vue CLI) or use a package manager like **npm**.

INSTALLATION
********************
********************

1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git
   

2. Navigate to the project directory:
   cd your-repo-name


3. Install dependencies:
   npm install


4. Start the development server:
   npm run dev
   

5. Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

FOLDER STRUCTURE
*****************************************************************************

```
your-repo-name/
├── src/
│   ├── components/              # Vue components (e.g., ReportTable.vue, SearchFilter.vue, ExportButtons.vue)
│   ├── views/                   # Vue views (e.g., HomeView.vue)
│   ├── store/                   # Pinia store (reports.js)
│   ├── router/                  # Vue Router configuration (router/index.js)
│   └── App.vue                  # Main application file
├── public/                      # Static files (e.g., index.html, favicon.ico)
├── package.json                 # Project dependencies and scripts
├── vue.config.js                # Configuration file for Vue CLI
└── README.md                    # This file
```

HOW TO USE 
*********************

1. **View Financial Reports**: Navigate to the home page (`/` route) to see the list of financial reports.

2. **Search and Filter**:
   - Use the **Search Filter** component to filter reports by Account Holder or Transaction Type.
   - Select the desired transaction type from the dropdown filter.

3. **Export Reports**:
   - Click on the **Export CSV**, **Export PDF**, or **Export Excel** buttons in the **ExportButtons** component to download the respective file format.

TECHINILOGIES USED 

Vue.js 3: JavaScript framework for building user interfaces.
Vuetify: Vue UI Library for creating responsive and consistent user interfaces.
Pinia: Lightweight state management for Vue applications.
Axios: For making HTTP requests to mock API data.
jsPDF: To generate PDF reports.
xlsx: To export reports in Excel format.

Contribution..

Feel free to fork this repository and contribute to it. If you make changes or improvements, please create a pull request (PR) with a detailed description of your changes.

 LINKS
 *****

- [GitHub Repository]https://github.com/JosephineNaava/Financial-Reports.git

