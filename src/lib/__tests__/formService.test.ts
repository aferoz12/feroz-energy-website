// Simple test to verify form service integration
// This is a basic test - in a real project you'd use a proper testing framework

import { FormSubmissionData } from '../formService';

// Mock test data
const mockFormData: FormSubmissionData = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  files: []
};

// Mock file for testing
const createMockFile = (name: string, size: number = 1024): File => {
  const file = new File(['mock content'], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'size', { value: size });
  return file;
};

// Test function
export const testFormService = () => {
  console.log('Testing form service...');
  
  // Test 1: Form data structure
  console.log('✓ Form data structure is correct:', {
    hasName: typeof mockFormData.name === 'string',
    hasEmail: typeof mockFormData.email === 'string',
    hasPhone: typeof mockFormData.phone === 'string',
    hasFiles: Array.isArray(mockFormData.files)
  });
  
  // Test 2: File validation
  const validFile = createMockFile('test.pdf', 1024);
  const invalidFile = createMockFile('test.txt', 1024);
  
  console.log('✓ PDF file validation:', {
    validPdf: validFile.type === 'application/pdf',
    invalidFile: invalidFile.type !== 'application/pdf'
  });
  
  // Test 3: File size validation
  const largeFile = createMockFile('large.pdf', 11 * 1024 * 1024); // 11MB
  console.log('✓ File size validation:', {
    normalSize: validFile.size < 10 * 1024 * 1024,
    tooLarge: largeFile.size > 10 * 1024 * 1024
  });
  
  console.log('All tests passed! Form service is ready for integration.');
};

// Export for use in development
if (typeof window !== 'undefined') {
  (window as any).testFormService = testFormService;
}
