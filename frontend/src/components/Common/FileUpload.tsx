import {
  Box,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

interface FileUploadProps {
  fileType: string
  onFileSelect: (file: File) => void
}

const FileUpload = ({ fileType, onFileSelect }: FileUploadProps) => {

  const handleFileChange = (event) => {
    onFileSelect(event.target.files[0]);
  };

  return (
    <Box maxW="md" mx="auto" mt={5}>
      <FormControl isRequired>
        <FormLabel>Select {fileType?.toUpperCase()} file</FormLabel>
        <Input
          type="file"
          accept={fileType}
          onChange={handleFileChange}
          p={1} // Add some padding for better appearance
        />
      </FormControl>
    </Box>
  );
};

export default FileUpload;
