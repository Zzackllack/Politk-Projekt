import React from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <AlertTriangle className="w-16 h-16 text-red-600 mb-4" />
            <h1 className="text-4xl font-bold mb-2">404 - Seite nicht gefunden</h1>
            <p className="text-lg mb-4">Die Seite, die Sie suchen, existiert nicht.</p>
            <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Zurück zur Startseite
            </Link>
        </div>
    );
};

export default NotFound;