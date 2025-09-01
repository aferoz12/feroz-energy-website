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
    name: "",
    email: "",
    phone: ""
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
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        files: selectedFiles
      };

      const result = await submitForm(submissionData);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your form has been submitted successfully.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "" });
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
    <div className="relative min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent-light opacity-50" />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-4 items-center">
          {/* Left Column - Content */}
          <div className="space-y-20">
            <Badge className="bg-accent text-white text-xl px-6 py-3">
              10+ Years Industry Experience
            </Badge>
            
            <div className="space-y-16">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary leading-tight">
                We only make money<br />
                if we{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  save you money
                </span>
              </h1>
              
              <p className="text-2xl text-muted-foreground leading-relaxed">
                Upload a utility bill to request a no-obligation review. Our success depends on your savings — no risk, no hidden fees.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <Button asChild size="lg" className="bg-gradient-accent hover:opacity-90 h-20 text-xl font-semibold">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-card h-full">
            <CardContent className="p-12 h-full flex flex-col">
              <div className="space-y-10 mb-8">
                <div>
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Get Your Free Rate Review
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    No savings, no fee. Let us find the overcharges in your utility bills.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 flex-1 flex flex-col">
                  <div>
                    <Input
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-16 text-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Business Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="h-16 text-lg"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="h-16 text-lg"
                      required
                    />
                  </div>

                  <div 
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer flex-1 flex items-center justify-center ${
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
                    <div className="space-y-4">
                      <p className="text-xl text-muted-foreground">
                        Drag & drop utility bills here
                      </p>
                      <p className="text-base text-muted-foreground">
                        Or click to select files (1-12 months recommended)
                      </p>
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

                  <div className="mt-auto">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-20 bg-gradient-accent hover:opacity-90 text-xl font-semibold"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Free Review Request"}
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      We'll review your information and contact you within 24 hours
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