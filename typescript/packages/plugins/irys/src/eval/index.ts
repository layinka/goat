// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Irys fund account tool
 */
export const IRYS_FUND_ACCOUNT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Fund my Irys account with 0.1 ETH",
        },
        referenceOutputs: {
            tool: "fund_irys_account",
            response: '{"amount":"0.1"}',
        },
    },
    {
        inputs: {
            query: "Add 0.5 MATIC to my Irys balance",
        },
        referenceOutputs: {
            tool: "fund_irys_account",
            response: '{"amount":"0.5"}',
        },
    },
];

/**
 * Dataset for testing Irys upload data tool
 */
export const IRYS_UPLOAD_DATA_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Upload the text 'Hello, Irys!' to the Irys network",
        },
        referenceOutputs: {
            tool: "upload_data",
            response: '{"data":"Hello, Irys!"}',
        },
    },
    {
        inputs: {
            query: 'Store the JSON data {"name":"Test","value":123} on Irys',
        },
        referenceOutputs: {
            tool: "upload_data",
            response: '{"data":"{"name":"Test","value":123}"}',
        },
    },
];

/**
 * Dataset for testing Irys upload file tool
 */
export const IRYS_UPLOAD_FILE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Upload the file /path/to/image.jpg to Irys with tag 'type' and value 'profile'",
        },
        referenceOutputs: {
            tool: "upload_file",
            response: '{"filePath":"/path/to/image.jpg","name":"type","value":"profile"}',
        },
    },
    {
        inputs: {
            query: "Store document.pdf on Irys with content-type tag set to document",
        },
        referenceOutputs: {
            tool: "upload_file",
            response: '{"filePath":"document.pdf","name":"content-type","value":"document"}',
        },
    },
];

/**
 * Dataset for testing Irys upload folder tool
 */
export const IRYS_UPLOAD_FOLDER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Upload the folder 'my-website' to Irys with index.html as the index file",
        },
        referenceOutputs: {
            tool: "upload_folder",
            response: '{"folderPath":"my-website","indexFile":"index.html"}',
        },
    },
    {
        inputs: {
            query: "Store the entire 'images' directory on Irys with batch size of 5",
        },
        referenceOutputs: {
            tool: "upload_folder",
            response: '{"folderPath":"images","batchSize":5}',
        },
    },
];

/**
 * Dataset for testing Irys download data tool
 */
export const IRYS_DOWNLOAD_DATA_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Download data from Irys with transaction ID 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "download_data",
            response: '{"transactionId":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}',
        },
    },
    {
        inputs: {
            query: "Retrieve the file with ID abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890 from Irys",
        },
        referenceOutputs: {
            tool: "download_data",
            response: '{"transactionId":"abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"}',
        },
    },
];

/**
 * Combined dataset for all Irys tools
 */
export const IRYS_ALL_TOOLS_DATASET: EvalDataset = [
    ...IRYS_FUND_ACCOUNT_DATASET,
    ...IRYS_UPLOAD_DATA_DATASET,
    ...IRYS_UPLOAD_FILE_DATASET,
    ...IRYS_UPLOAD_FOLDER_DATASET,
    ...IRYS_DOWNLOAD_DATA_DATASET,
];
