import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { submitForm, FormSubmissionData } from "@/lib/formService";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    name: "",
    email: "",
    phone: "",
    comments: ""
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData: FormSubmissionData = {
        businessName: formData.businessName,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        comments: formData.comments,
        files: selectedFiles
      };

      const result = await submitForm(submissionData);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your form has been submitted successfully.",
        });
        
        // Reset form
        setFormData({ businessName: "", name: "", email: "", phone: "", comments: "" });
        setSelectedFiles([]);
        
        // Redirect to confirmation page with confirmation number
        navigate(`/form-confirmation?confirmation=${result.confirmationNumber}`);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to submit form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const pdfFiles = Array.from(files).filter(file => file.type === 'application/pdf');
    const invalidFiles = Array.from(files).filter(file => file.type !== 'application/pdf');
    
    if (invalidFiles.length > 0) {
      toast({
        title: "Invalid files",
        description: "Only PDF files are allowed.",
        variant: "destructive",
      });
    }

    if (pdfFiles.length > 0) {
      setSelectedFiles(prev => [...prev, ...pdfFiles]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent-light opacity-50" />
      
      <div className="relative w-full px-8 sm:px-10 lg:px-16 xl:px-20 pt-12 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <Badge className="bg-accent text-white text-base px-4 py-2">
              10+ Years Industry Experience
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                You're probably overpaying for energy.<br />
                We find hidden savings and put them back in your pocket.
              </h1>
              
              <div className="space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Upload a utility bill to request a no-obligation review. Our success depends on your savings — no risk, no hidden fees. We only make money if we save you money.
                </p>
              </div>
            </div>

            {/* Button container - will align with form submit button */}
            <div className="pt-4">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 h-14 text-base font-semibold">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-card">
            <CardContent className="p-8 lg:p-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Get Your Free Rate Review
                  </h3>
                                       <p className="text-sm text-muted-foreground">
                       No savings, no fee. Let us find the overcharges in your commercial utility bills.
                     </p>
                </div>

                                   <form onSubmit={handleSubmit} className="space-y-5">
                     <div>
                       <Input
                         placeholder="Business Name"
                         value={formData.businessName}
                         onChange={(e) => handleInputChange("businessName", e.target.value)}
                         className="h-12 text-sm"
                         required
                       />
                     </div>
                     <div>
                       <Input
                         placeholder="Full Name"
                         value={formData.name}
                         onChange={(e) => handleInputChange("name", e.target.value)}
                         className="h-12 text-sm"
                         required
                       />
                     </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-12 text-sm"
                      required
                    />
                  </div>
                  
                                       <div>
                       <Input
                         type="tel"
                         placeholder="Phone Number"
                         value={formData.phone}
                         onChange={(e) => handleInputChange("phone", e.target.value)}
                         className="h-12 text-sm"
                         required
                       />
                     </div>
                     
                     <div>
                       <textarea
                         placeholder="Additional comments or context (optional)"
                         value={formData.comments}
                         onChange={(e) => handleInputChange("comments", e.target.value)}
                         className="w-full h-24 p-3 text-sm border border-input rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                         rows={4}
                       />
                     </div>

                                       <div className="space-y-2">
                       <div className="flex items-center justify-between">
                         <label className="text-sm font-medium text-primary">
                           Utility Bills (Optional)
                         </label>
                         <span className="text-xs text-muted-foreground">
                           Not required for initial review
                         </span>
                       </div>
                       
                       <div 
                         className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                           isDragOver 
                             ? 'border-accent bg-accent/10' 
                             : 'border-border hover:border-accent'
                         }`}
                         onDragOver={handleDragOver}
                         onDragLeave={handleDragLeave}
                         onDrop={handleDrop}
                         onClick={() => fileInputRef.current?.click()}
                       >
                         <input
                           ref={fileInputRef}
                           type="file"
                           accept=".pdf"
                           multiple
                           onChange={(e) => handleFileSelect(e.target.files)}
                           className="hidden"
                         />
                         <div className="space-y-2">
                           <p className="text-base text-muted-foreground">
                             Drag & drop utility bills here
                           </p>
                           <p className="text-xs text-muted-foreground">
                             Or click to select files (1-12 months recommended)
                           </p>
                         </div>
                       </div>
                     </div>

                  {selectedFiles.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-primary">Selected Files:</p>
                      <div className="space-y-1">
                        {selectedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                            <span className="text-sm text-muted-foreground truncate">
                              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                              className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                            >
                              ×
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Submit button - aligned with View FAQ button */}
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-gradient-accent hover:opacity-90 text-base font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Free Review Request"}
                    </Button>
                    
                                           <p className="text-xs text-muted-foreground text-center mt-3">
                         We'll review your information and contact you within 24 hours
                       </p>
                       <p className="text-xs text-muted-foreground text-center mt-2">
                         Your business data is encrypted and never shared. We take security seriously.
                       </p>
                  </div>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;