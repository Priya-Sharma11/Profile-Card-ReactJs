import React from 'react';

const Card = ({ user }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-violet-200 via-fuchsia-200 to-indigo-200">
      <div className="relative w-[600px] p-8 group">
        <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/70 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:bg-white/70">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/40 to-indigo-300/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-200 via-fuchsia-200 to-indigo-200 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700" />
          </div>

          <div className="relative flex gap-8">
            <div className="relative transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-fuchsia-300 to-indigo-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
                <img
                  src={user.picture.large}
                  alt={`${user.name.first} ${user.name.last}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-700 hover:text-fuchsia-600 transition-colors duration-300">
                {user.name.first} {user.name.last}
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-rose-400 group-hover/item:bg-fuchsia-400" />
                  <span className="font-medium text-gray-600">Gender:</span>
                  <span className="text-gray-500">{user.gender}</span>
                </div>

                <div className="flex items-center space-x-3 group/item hover:translate-x-2 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 group-hover/item:bg-fuchsia-400" />
                  <span className="font-medium text-gray-600">Phone:</span>
                  <span className="text-gray-500">{user.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-transparent rounded-tr-3xl transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-bl-3xl transform group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
};

export default Card;