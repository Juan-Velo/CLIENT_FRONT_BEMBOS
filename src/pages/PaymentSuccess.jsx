import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShoppingBag } from 'lucide-react';

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={40} className="text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-[#193058] mb-2">¡Pago Exitoso!</h2>
        <p className="text-gray-600 mb-6">
          Tu compra ha sido procesada correctamente. Estamos preparando tu pedido.
        </p>
        
        <div className="space-y-3">
          <button 
            onClick={() => navigate('/pedidos')}
            className="w-full bg-[#ffb500] hover:bg-[#e5a300] text-[#193058] font-bold py-3 rounded-full transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Ver mis pedidos
          </button>
          
          <button 
            onClick={() => navigate('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-[#193058] font-bold py-3 rounded-full transition-colors"
          >
            Volver al Inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
