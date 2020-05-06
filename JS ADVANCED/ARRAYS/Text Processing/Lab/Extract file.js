function extractExplorerFile(path) {
    const fileIndex = path.lastIndexOf('\\') + 1;
    const extensionIndex = path.lastIndexOf('.');
    const file = path.substring(fileIndex, extensionIndex);
    const extension = path.substring(extensionIndex + 1);
    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}
extractExplorerFile('C:\\Projects\\Data-Structures\\LinkedList.cs')