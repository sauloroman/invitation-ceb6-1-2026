import { createSlice } from '@reduxjs/toolkit';

export interface Graduate {
    id: string;
    name: string;
}

export interface Salon {
    name: string;
    graduates: Graduate[];
}

export interface Career {
    id: string;
    name: string;
    salones: Salon[];
}

interface GraduatesState {
    careers: {
        tics: Career;
        administracion: Career;
        intervencion: Career;
    };
}

const initialState: GraduatesState = {
    careers: {
        tics: {
            id: 'tics',
            name: 'Tecnologías de la Información y Comunicación',
            salones: [
                {
                    name: 'Grupo 601',
                    graduates: [
                        { id: 'tics-601-1', name: 'Aguilera Rodríguez Jorge Emilio' },
                        { id: 'tics-601-2', name: 'Alvarado Zúñiga César Emiliano' },
                        { id: 'tics-601-3', name: 'Álvarez Ayala Alexia Sarahí' },
                        { id: 'tics-601-4', name: 'Arias Acevedo Lesly Carolina' },
                        { id: 'tics-601-5', name: 'Báez Hernández Angélica Lilian' },
                        { id: 'tics-601-6', name: 'Chávez Robledo María Fernanda' },
                        { id: 'tics-601-7', name: 'Cisneros Almanza Breidy Manuel' },
                        { id: 'tics-601-8', name: 'Dávila Rodríguez Briana Lizbeth' },
                        { id: 'tics-601-9', name: 'Dehesa de Luna William Dazahev' },
                        { id: 'tics-601-10', name: 'Delgado Esqueda Maycol Efrén' },
                        { id: 'tics-601-11', name: 'Durón Durán Javier Emiliano' },
                        { id: 'tics-601-12', name: 'Esparza Francisco Nelly Adalid' },
                        { id: 'tics-601-13', name: 'Esparza López Joxan Guadalupe' },
                        { id: 'tics-601-14', name: 'Felix Orenday Regina' },
                        { id: 'tics-601-15', name: 'García Flores Natalia María' },
                        { id: 'tics-601-16', name: 'Gómez López Jacqueline' },
                        { id: 'tics-601-17', name: 'Guel Navarro Valeria Estefanía' },
                        { id: 'tics-601-18', name: 'Marín López Christopher Gael' },
                        { id: 'tics-601-19', name: 'Martínez Luévano Mariana Elizabeth' },
                        { id: 'tics-601-20', name: 'Martínez Maldonado Martha Izabella' },
                        { id: 'tics-601-21', name: 'Martínez Ramírez Valeria Nicol' },
                        { id: 'tics-601-22', name: 'Mota Torreany Mario' },
                        { id: 'tics-601-23', name: 'Ramírez Moreno Cristian Adrián' },
                        { id: 'tics-601-24', name: 'Regis Reyna Natalia Alejandra' },
                        { id: 'tics-601-25', name: 'Reyes Quiroz Zarek Enrique' },
                        { id: 'tics-601-26', name: 'Rodríguez Candelas Ángel Jared' },
                        { id: 'tics-601-27', name: 'Rodríguez Torres Axel Donovan' },
                        { id: 'tics-601-28', name: 'Ruiz Anaya Bárbara Victoria' },
                        { id: 'tics-601-29', name: 'Ruiz Esparza Ávila Mario Santiago' },
                        { id: 'tics-601-30', name: 'Salceda Campbell Valeria Patricia' },
                        { id: 'tics-601-31', name: 'Soto Noriega Jacqueline Guadalupe' },
                        { id: 'tics-601-32', name: 'Torres Aranda Iris Paloma' }
                    ]
                },
                {
                    name: 'Grupo 602',
                    graduates: [
                        { id: 'tics-602-1', name: 'Alcaraz Ceballos Azul Shirley' },
                        { id: 'tics-602-2', name: 'Alfaro Rodríguez Dayani Belén' },
                        { id: 'tics-602-3', name: 'Ávila González Liliana Angelique' },
                        { id: 'tics-602-4', name: 'Baca Esquivel Ariel Adrián' },
                        { id: 'tics-602-5', name: 'Barrales Carlos Ismael' },
                        { id: 'tics-602-6', name: 'Barrios Ávila Yamilet' },
                        { id: 'tics-602-7', name: 'Chávez Barrios Santiago' },
                        { id: 'tics-602-8', name: 'Delgado María Fernanda' },
                        { id: 'tics-602-9', name: 'Escalera González Brandon Jesús' },
                        { id: 'tics-602-10', name: 'Gallardo Flores Jorge Luis' },
                        { id: 'tics-602-11', name: 'García Alderete Eduardo' },
                        { id: 'tics-602-12', name: 'García Valencia Madeline Michelle' },
                        { id: 'tics-602-13', name: 'Gutiérrez Ramírez Camila' },
                        { id: 'tics-602-14', name: 'Hernández Alcalá Christian Axel' },
                        { id: 'tics-602-15', name: 'Hernández Zamora Leonardo' },
                        { id: 'tics-602-16', name: 'Jiménez Salas Maleny Marcela' },
                        { id: 'tics-602-17', name: 'López Rangel Ángel Alejandro' },
                        { id: 'tics-602-18', name: 'Luévano Macías Abraham Emmanuel' },
                        { id: 'tics-602-19', name: 'Marín Delgado Yatziri Noemí' },
                        { id: 'tics-602-20', name: 'Martínez Hernández Christian Yahel' },
                        { id: 'tics-602-21', name: 'Méndez Torres Christopher Alejandro' },
                        { id: 'tics-602-22', name: 'Patlán Trujillo Romina' },
                        { id: 'tics-602-23', name: 'Rangel Tinajero Mateo Yael' },
                        { id: 'tics-602-24', name: 'Reyna Díaz de León Víctor Israel' },
                        { id: 'tics-602-25', name: 'Rivera Palos Juan José' },
                        { id: 'tics-602-26', name: 'Rodríguez Guerrero Jania Naomy' },
                        { id: 'tics-602-27', name: 'Salas Sánchez Miguel Alejandro' },
                        { id: 'tics-602-28', name: 'Torres Ávila Bryan Eleazar' },
                        { id: 'tics-602-29', name: 'Torres Chiquito Andrea Guadalupe' },
                        { id: 'tics-602-30', name: 'Tuelles Medina Estefani Guadalupe' },
                        { id: 'tics-602-31', name: 'Vargas Bárcenas Alberto Leonel' },
                        { id: 'tics-602-32', name: 'Zamora Velázquez Alondra Barileen' }
                    ]
                },
                {
                    name: 'Grupo 603',
                    graduates: [
                        { id: 'tics-603-1', name: 'Acosta Trinidad Brandon Alexis' },
                        { id: 'tics-603-2', name: 'Agüero Hipólito Luis Ramsés' },
                        { id: 'tics-603-3', name: 'Aguilar Martínez Alexandra' },
                        { id: 'tics-603-4', name: 'Avendaño Sánchez Fernando Javier' },
                        { id: 'tics-603-5', name: 'Contreras Mireles Evelyn Michelle' },
                        { id: 'tics-603-6', name: 'Cruz Magallanes Natalia' },
                        { id: 'tics-603-7', name: 'De la Rosa Báez Ariana Sofía' },
                        { id: 'tics-603-8', name: 'De Luna Zúñiga Luis Emilio' },
                        { id: 'tics-603-9', name: 'Delgado Aguilar Gabriel de Jesús' },
                        { id: 'tics-603-10', name: 'Delgado Campos Andrea Vanessa' },
                        { id: 'tics-603-11', name: 'Díaz Valdez Ana Paola' },
                        { id: 'tics-603-12', name: 'Esparza Padilla Andy Leonel' },
                        { id: 'tics-603-13', name: 'Flores Chapa Daniel' },
                        { id: 'tics-603-14', name: 'Guerrero Arellano María de Lourdes' },
                        { id: 'tics-603-15', name: 'Hernández Santoyo Edder Yazid' },
                        { id: 'tics-603-16', name: 'Ibáñez González Ángel Emiliano' },
                        { id: 'tics-603-17', name: 'Ibarra Acosta Hannia Sofía' },
                        { id: 'tics-603-18', name: 'Macías García Cinthya' },
                        { id: 'tics-603-19', name: 'Martínez Landeros María Fernanda' },
                        { id: 'tics-603-20', name: 'Monreal Trueba Diana Michelle' },
                        { id: 'tics-603-21', name: 'Murillo Díaz Diego Alejandro' },
                        { id: 'tics-603-22', name: 'Nava Lomelí Christofer Manuel' },
                        { id: 'tics-603-23', name: 'Rascón Macías Matthias' },
                        { id: 'tics-603-24', name: 'Rivera Martínez Mary José' },
                        { id: 'tics-603-25', name: 'Rocha Esparza José Juan' },
                        { id: 'tics-603-26', name: 'Rodríguez Padilla Omar Alexis' },
                        { id: 'tics-603-27', name: 'Rosas Santos César Alejandro' },
                        { id: 'tics-603-28', name: 'Ruelas Padilla Marco Antonio' },
                        { id: 'tics-603-29', name: 'Trujillo Bernabé Abdallah Osiel' },
                        { id: 'tics-603-30', name: 'Zamora Badajoz Emiliano' }
                    ]
                },
                {
                    name: 'Grupo 606',
                    graduates: [
                        { id: 'tics-606-1', name: 'Arellano Mendoza Ángel Arturo' },
                        { id: 'tics-606-2', name: 'Badillo de Luna Amaury Alexander' },
                        { id: 'tics-606-3', name: 'Barragán Córdova Saúl Nicolás' },
                        { id: 'tics-606-4', name: 'Castillo Hernández Brandon' },
                        { id: 'tics-606-5', name: 'Córdova de la Cruz José Ángel' },
                        { id: 'tics-606-6', name: 'Cortés Díaz de León Fernando de Jesús' },
                        { id: 'tics-606-7', name: 'Esparza Rodríguez Aneli Mariana' },
                        { id: 'tics-606-8', name: 'Flores Ávalos Uziel Valentín' },
                        { id: 'tics-606-9', name: 'Flores Contreras Luis Daniel' },
                        { id: 'tics-606-10', name: 'Flores Navarro José Luis' },
                        { id: 'tics-606-11', name: 'García García Valeria Ramely' },
                        { id: 'tics-606-12', name: 'García Ureña Hanna Isabeli' },
                        { id: 'tics-606-13', name: 'Gómez Vargas Everardo' },
                        { id: 'tics-606-14', name: 'Guerrero Oropeza Iker Jared' },
                        { id: 'tics-606-15', name: 'Gutiérrez Cruz Ivon Noelia' },
                        { id: 'tics-606-16', name: 'Herrera Figueroa Joana Lizbeth' },
                        { id: 'tics-606-17', name: 'Juárez Rodríguez Gael Gerardo' },
                        { id: 'tics-606-18', name: 'Mejía Cruz Alexis' },
                        { id: 'tics-606-19', name: 'Montoya Taylor Luis Leonardo' },
                        { id: 'tics-606-20', name: 'Ramírez Rocha Alfredo Rodrigo' },
                        { id: 'tics-606-21', name: 'Ramírez Rodríguez Mayela Lizeth' },
                        { id: 'tics-606-22', name: 'Ramos Rodríguez Josué Brayham' },
                        { id: 'tics-606-23', name: 'Rodríguez Ramos Andrea' },
                        { id: 'tics-606-24', name: 'Rojas Medina Ximena Valeria' },
                        { id: 'tics-606-25', name: 'Roldán Carrete Aranza' },
                        { id: 'tics-606-26', name: 'Romo Hernández Edwin Gael' },
                        { id: 'tics-606-27', name: 'Sánchez Martín Daniela' },
                        { id: 'tics-606-28', name: 'Sánchez Moreno Alexandra Natali' },
                        { id: 'tics-606-29', name: 'Téllez Guzmán Piper Alexa' },
                        { id: 'tics-606-30', name: 'Valenzuela Ruiz Andrea' }
                    ]
                }
            ]
        },
        administracion: {
            id: 'administracion',
            name: 'Administración',
            salones: [
                {
                    name: 'Grupo 604',
                    graduates: [
                        { id: 'admin-604-1', name: 'Avelar Garay Heidi' },
                        { id: 'admin-604-2', name: 'Briano López Arlette Joceline' },
                        { id: 'admin-604-3', name: 'Córdova Trujillo Paulina Guadalupe' },
                        { id: 'admin-604-4', name: 'Cortez Macías Arely' },
                        { id: 'admin-604-5', name: 'Cruz Ornelas Ximena' },
                        { id: 'admin-604-6', name: 'Cruz Rosales Diego Asiel' },
                        { id: 'admin-604-7', name: 'De León Valdez Daury Alexander' },
                        { id: 'admin-604-8', name: 'De Lira Flores José de Jesús' },
                        { id: 'admin-604-9', name: 'Díaz Martínez Sherlyn' },
                        { id: 'admin-604-10', name: 'Domínguez Galván Julieta Ivette' },
                        { id: 'admin-604-11', name: 'Domínguez Macías Jonathan Santiago' },
                        { id: 'admin-604-12', name: 'Durón Guerrero Melanie Ximena' },
                        { id: 'admin-604-13', name: 'Esparza Miranda Ángel Manuel' },
                        { id: 'admin-604-14', name: 'Esparza Tovar Naomi' },
                        { id: 'admin-604-15', name: 'Flores Cardona Paola Yazmín' },
                        { id: 'admin-604-16', name: 'Gallegos Bravo Iann' },
                        { id: 'admin-604-17', name: 'González Franco Ana María' },
                        { id: 'admin-604-18', name: 'González García Paola Fernanda' },
                        { id: 'admin-604-19', name: 'González López Alejandro' },
                        { id: 'admin-604-20', name: 'Guel Hernández Alondra' },
                        { id: 'admin-604-21', name: 'Gutiérrez Chávez Yuliana Naomi' },
                        { id: 'admin-604-22', name: 'Guzmán López Luis Gael' },
                        { id: 'admin-604-23', name: 'Lara Pedroza Carolina Atziry' },
                        { id: 'admin-604-24', name: 'López de la Rosa Brianna Sofía' },
                        { id: 'admin-604-25', name: 'López González Grisleydi Claribel' },
                        { id: 'admin-604-26', name: 'Márquez Esparza María José' },
                        { id: 'admin-604-27', name: 'Munguía Ortiz Yatziri Guadalupe' },
                        { id: 'admin-604-28', name: 'Peralta Figueroa Jesús Sebastián' },
                        { id: 'admin-604-29', name: 'Pérez Orozco Isaac' },
                        { id: 'admin-604-30', name: 'Plata Vázquez Héctor Uriel' },
                        { id: 'admin-604-31', name: 'Posada Bizarrón Ángela Elizabeth' },
                        { id: 'admin-604-32', name: 'Reyes Murillo América Patricia' },
                        { id: 'admin-604-33', name: 'Reyes Vera Salmerón Fernando Axel' },
                        { id: 'admin-604-34', name: 'Rodea Martínez Estefanía' },
                        { id: 'admin-604-35', name: 'Romo Gómez Danna Ximena' },
                        { id: 'admin-604-36', name: 'Sánchez Udave Karyme Alessandra' },
                        { id: 'admin-604-37', name: 'Sandoval López María José' },
                        { id: 'admin-604-38', name: 'Soledad Martínez Naomi' },
                        { id: 'admin-604-39', name: 'Tabares Ramos Gerardo Naim' }
                    ]
                },
                {
                    name: 'Grupo 607',
                    graduates: [
                        { id: 'admin-607-1', name: 'Alfaro Abraham' },
                        { id: 'admin-607-2', name: 'Álvarez Rodríguez Omar Alexis' },
                        { id: 'admin-607-3', name: 'Castillo Rangel Galilea' },
                        { id: 'admin-607-4', name: 'Cervantes Salas Alisson Yuridia' },
                        { id: 'admin-607-5', name: 'Cortés Nieto Jennyfer Christina' },
                        { id: 'admin-607-6', name: 'Cruz Castillo Elena Daniela' },
                        { id: 'admin-607-7', name: 'De León Rodríguez Thania Gabriela' },
                        { id: 'admin-607-8', name: 'Díaz Badillo Rodrigo' },
                        { id: 'admin-607-9', name: 'Durán Neri Keisha Judith' },
                        { id: 'admin-607-10', name: 'Esquivel Vázquez Sergio Kevin' },
                        { id: 'admin-607-11', name: 'Gámez Franco Yanizan Alexander' },
                        { id: 'admin-607-12', name: 'García Cruz Ximena Betzey' },
                        { id: 'admin-607-13', name: 'Jiménez Vidal Vieri Javier' },
                        { id: 'admin-607-14', name: 'Mares Macías Lizbeth Arely' },
                        { id: 'admin-607-15', name: 'Martínez Rodríguez David Azael' },
                        { id: 'admin-607-16', name: 'Martínez Salazar Evelyn' },
                        { id: 'admin-607-17', name: 'Méndez González Paris Sebastián' },
                        { id: 'admin-607-18', name: 'Reynoso Rojas Michelle Nayalí' },
                        { id: 'admin-607-19', name: 'Torres Olmos Johan Joseph' },
                        { id: 'admin-607-20', name: 'Valadez de Lara Evelyn Marbella' }
                    ]
                }
            ]
        },
        intervencion: {
            id: 'intervencion',
            name: 'Intervención en la Educación Obligatoria',
            salones: [
                {
                    name: 'Grupo 605',
                    graduates: [
                        { id: 'int-605-1', name: 'Acosta Reyes Aranza Michelle' },
                        { id: 'int-605-2', name: 'Álvarez Hernández Vanessa Yamilet' },
                        { id: 'int-605-3', name: 'Álvarez Medellín Evolet Alexa' },
                        { id: 'int-605-4', name: 'Ávila Ruiz Daniela Zoe' },
                        { id: 'int-605-5', name: 'Barragán Alfarez Hasayma Dalai' },
                        { id: 'int-605-6', name: 'Carmona Galindo Andrea Citlalli' },
                        { id: 'int-605-7', name: 'Castro Martínez Samantha' },
                        { id: 'int-605-8', name: 'Cedeño de Luna Tania Daniela' },
                        { id: 'int-605-9', name: 'Chávez Chaidez Naomi Jacqueline' },
                        { id: 'int-605-10', name: 'Chávez González Naomi Alejandra' },
                        { id: 'int-605-11', name: 'Cuevas de Lira Zulay Scarlet' },
                        { id: 'int-605-12', name: 'De la Cruz Lara Alanís' },
                        { id: 'int-605-13', name: 'De Lira Jáuregui Ashley Giselle' },
                        { id: 'int-605-14', name: 'De Luna Pedroza Ariadna del Rayo' },
                        { id: 'int-605-15', name: 'Durán Rangel Elsy' },
                        { id: 'int-605-16', name: 'Figueroa Salgado Sofía' },
                        { id: 'int-605-17', name: 'Flores Pérez Andrea' },
                        { id: 'int-605-18', name: 'Franco Esparza Andrea Elizabeth' },
                        { id: 'int-605-19', name: 'García de la Rosa Hiram Abi' },
                        { id: 'int-605-20', name: 'García Escandonvania Paulina' },
                        { id: 'int-605-21', name: 'Gloria Estrada Magalí Monserrat' },
                        { id: 'int-605-22', name: 'González Morales Paulina' },
                        { id: 'int-605-23', name: 'Gutiérrez Muñoz Celeste Jaqueline' },
                        { id: 'int-605-24', name: 'Hernández Hernández Patricia' },
                        { id: 'int-605-25', name: 'Lara Durón Valeria' },
                        { id: 'int-605-26', name: 'López Castañeda Danna Camila' },
                        { id: 'int-605-27', name: 'Macías Centeno José Diego' },
                        { id: 'int-605-28', name: 'Martínez Llamas Nidya Romina' },
                        { id: 'int-605-29', name: 'Martínez López Nancy Carolina' },
                        { id: 'int-605-30', name: 'Méndez Chávez Michelle' },
                        { id: 'int-605-31', name: 'Méndez López Camila Yajaira' },
                        { id: 'int-605-32', name: 'Muñoz Sánchez Gerardo Raziel' },
                        { id: 'int-605-33', name: 'Olivares Lomelí Renata Monserrat' },
                        { id: 'int-605-34', name: 'Ortega Quezada Violeta' },
                        { id: 'int-605-35', name: 'Palacios Andrea Guadalupe' },
                        { id: 'int-605-36', name: 'Parra Flores Diego Alejandro' },
                        { id: 'int-605-37', name: 'Puentes Delfín Larissa' },
                        { id: 'int-605-38', name: 'Ramírez Quevedo Nicole' },
                        { id: 'int-605-39', name: 'Sapién Ángeles Dafne Giselle' },
                        { id: 'int-605-40', name: 'Soto Terrones Melanie Sofía' },
                        { id: 'int-605-41', name: 'Tirado López Kenneth Samuel' },
                        { id: 'int-605-42', name: 'Torres Rodríguez Keyla Naomy' },
                        { id: 'int-605-43', name: 'Tostado López Nancy Fernanda' },
                        { id: 'int-605-44', name: 'Tristán Cortés Fernanda Monserrat' }
                    ]
                },
                {
                    name: 'Grupo 608',
                    graduates: [
                        { id: 'int-608-1', name: 'Bárcenas Torres Daniela Guadalupe' },
                        { id: 'int-608-2', name: 'Blanco Cardona Kimberly Fernanda' },
                        { id: 'int-608-3', name: 'Camarillo Ramos Juana Cristina' },
                        { id: 'int-608-4', name: 'Cardona López Diego' },
                        { id: 'int-608-5', name: 'Cisneros Torres Fernanda Naomi' },
                        { id: 'int-608-6', name: 'De Lara Mares Gedani Yamile' },
                        { id: 'int-608-7', name: 'Díaz de León Román Meredit' },
                        { id: 'int-608-8', name: 'Díaz Luevano Jaime Israel' },
                        { id: 'int-608-9', name: 'Duarte Ramírez Aranza Janileth' },
                        { id: 'int-608-10', name: 'Esparza Díaz Estrella Joselin' },
                        { id: 'int-608-11', name: 'García Córdova Camila Guadalupe' },
                        { id: 'int-608-12', name: 'Gómez Sánchez Melissa Jaqueline' },
                        { id: 'int-608-13', name: 'González García Melissa' },
                        { id: 'int-608-14', name: 'Guadalajara Pacheco Ruth Fernanda' },
                        { id: 'int-608-15', name: 'Hernández Macías Jared Emiliano' },
                        { id: 'int-608-16', name: 'Ibarra Sandra Monserrat' },
                        { id: 'int-608-17', name: 'López de Santiago Jimena' },
                        { id: 'int-608-18', name: 'Marín Vicencio Samantha Denisse' },
                        { id: 'int-608-19', name: 'Martínez Amador Ángel Aarón' },
                        { id: 'int-608-20', name: 'Medina Córdova Juan Carlos' },
                        { id: 'int-608-21', name: 'Ortiz Flores Maria de la Luz' },
                        { id: 'int-608-22', name: 'Padilla Torres Jeniffer Ailin' },
                        { id: 'int-608-23', name: 'Peña López Ángel Giovanni' },
                        { id: 'int-608-24', name: 'Pérez Olayo Gloria Fernanda' },
                        { id: 'int-608-25', name: 'Ramírez Esquivel Josue Jesús' },
                        { id: 'int-608-26', name: 'Reyes Huerta Fátima Guadalupe' },
                        { id: 'int-608-27', name: 'Rodríguez Dhara Sofía' },
                        { id: 'int-608-28', name: 'Rodríguez Hernández Rosa Maria' },
                        { id: 'int-608-29', name: 'Urquieta López Fátima Nayeli' },
                        { id: 'int-608-30', name: 'Valadez González Ruth Abril' },
                        { id: 'int-608-31', name: 'Vargas Esparza Juan Guillermo' }
                    ]
                }
            ]
        }
    }
};

const graduatesSlice = createSlice({
    name: 'graduates',
    initialState,
    reducers: {
        // Reducers for potential runtime modifications (adding, updating if needed)
    }
});

export default graduatesSlice.reducer;
