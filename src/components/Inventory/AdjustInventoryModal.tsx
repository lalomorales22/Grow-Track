import React, { useState } from 'react';
import Modal from '../shared/Modal';
import { Plus, Minus } from 'lucide-react';

interface AdjustInventoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdjustInventoryModal: React.FC<AdjustInventoryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    itemId: '',
    adjustmentType: 'increase',
    quantity: '',
    reason: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Adjust Inventory">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="itemId" className="block text-sm font-medium text-gray-700">
            Item ID
          </label>
          <input
            type="text"
            id="itemId"
            value={formData.itemId}
            onChange={(e) => setFormData({ ...formData, itemId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Adjustment Type
          </label>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, adjustmentType: 'increase' })}
              className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                formData.adjustmentType === 'increase'
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-300 bg-white text-gray-700'
              }`}
            >
              <Plus className="h-5 w-5 mr-2" />
              Increase
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, adjustmentType: 'decrease' })}
              className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                formData.adjustmentType === 'decrease'
                  ? 'border-error-500 bg-error-50 text-error-700'
                  : 'border-gray-300 bg-white text-gray-700'
              }`}
            >
              <Minus className="h-5 w-5 mr-2" />
              Decrease
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={formData.quantity}
            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          <select
            id="reason"
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            required
          >
            <option value="">Select a reason</option>
            <option value="reconciliation">Inventory Reconciliation</option>
            <option value="damage">Damaged Product</option>
            <option value="quality-control">Quality Control</option>
            <option value="return">Customer Return</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Notes
          </label>
          <textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          />
        </div>

        <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
          >
            Adjust Inventory
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AdjustInventoryModal;