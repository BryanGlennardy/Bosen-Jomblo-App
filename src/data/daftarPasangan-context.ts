import React from 'react';
export interface Pasangan {
    id: string,
    name: string,
    avatar: string,
    gender: string,
    description: string
}

interface Context {
    pasangan: Pasangan[];
    targetPasangan: Pasangan[];
    addPasangan: (id: string, name: string, avatar: string, gender: string, description: string) => void;
    deletePasangan: (id: string) => void;
}

const PasanganContext = React.createContext<Context>({
    pasangan: [],
    targetPasangan: [],
    addPasangan: () => {},
    deletePasangan: () => {}
});

export default PasanganContext;