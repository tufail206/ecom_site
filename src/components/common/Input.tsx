import React, { type ReactNode } from "react";
import {
  Controller,
  type Control,
  type RegisterOptions,
} from "react-hook-form";

type InputProps = {
  placeholder?: string;
  control: Control<any>;
  name: string;
  rules?: RegisterOptions;
  multiline?: boolean;
  fullWidth?: boolean;
  label?: ReactNode;
  type?: React.HTMLInputTypeAttribute;
  icon?: ReactNode;
};

const Input = ({
  placeholder,
  control,
  name,
  rules,
  multiline = false,
  fullWidth = true,
  label,
  type = "text",
  icon,
}: InputProps) => {
  return (
    <div className={`${fullWidth ? "w-full" : "w-auto"} mb-4`}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <div className="relative">
            {icon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {icon}
              </div>
            )}
            {multiline ? (
              <textarea
                {...field}
                id={name}
                placeholder={placeholder}
                className={`
                  w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-hidden
                  ${
                    fieldState.error
                      ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  }
                  ${icon ? "pl-10" : ""}
                `}
                rows={4}
              />
            ) : (
              <input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                className={`
                  w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-hidden
                  ${
                    fieldState.error
                      ? "border-red-500 bg-red-50 focus:ring-2 focus:ring-red-200"
                      : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  }
                  ${icon ? "pl-10" : ""}
                `}
              />
            )}

            {fieldState.error && (
              <p className="mt-1 text-xs text-red-500 font-medium">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Input;
