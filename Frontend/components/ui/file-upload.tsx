"use client";

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileUploadProps {
  onFilesAdded: (urls: string[]) => void;
  existingImages?: string[];
  onRemove?: (index: number) => void;
  className?: string;
}

export function FileUpload({ 
  onFilesAdded, 
  existingImages = [], 
  onRemove,
  className 
}: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setIsLoading(true);
    
    // Convert files to data URLs
    const promises = acceptedFiles.map(file => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises).then(urls => {
      onFilesAdded(urls);
      setIsLoading(false);
    });
  }, [onFilesAdded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    }
  });

  return (
    <div className={cn("space-y-2", className)}>
      <div 
        {...getRootProps()} 
        className={cn(
          "border-2 border-dashed rounded-lg p-6 transition-colors cursor-pointer",
          isDragActive ? "border-primary bg-secondary/50" : "border-border hover:border-primary/50",
          isLoading && "opacity-50 cursor-wait"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="h-10 w-10 mb-2 text-muted-foreground" />
          <p className="text-sm font-medium">
            {isDragActive ? "Drop images here" : "Drag & drop images here or click to browse"}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supported formats: JPEG, PNG, GIF, WebP
          </p>
          {isLoading && (
            <div className="mt-2 w-full max-w-xs">
              <div className="h-1 w-full bg-secondary overflow-hidden rounded-full">
                <div className="h-full bg-primary animate-pulse rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {existingImages.length > 0 && (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {existingImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-md border group"
            >
              <img
                src={image}
                alt={`Product image ${index + 1}`}
                className="h-full w-full object-cover transition-opacity group-hover:opacity-80"
              />
              {onRemove && (
                <button
                  type="button"
                  className="absolute right-1 top-1 h-6 w-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => onRemove(index)}
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}