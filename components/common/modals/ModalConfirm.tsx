"use client";

import React from "react";
import Button from "@/components/user/common/Button";

interface ConfirmModalProps {
  text: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  text,
  onConfirm,
  onCancel,
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <p className="text-slate-800 mb-6">{text}</p>

        <div className="flex justify-end gap-2">
          <Button variant="ghost" className="cursor-pointer" onClick={onCancel}>
            {cancelText}
          </Button>

          <Button variant="primary" className="cursor-pointer" onClick={onConfirm}>
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
