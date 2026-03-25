
export interface Horario{
    id:number;
    dia:string;
    hora:string;
    ascenso:string;
    descenso:string;
    intermedio?:string;

}




export const datosHorarios:Record<string, {ida:Horario[], vuelta:Horario[]}> = {
    
    'Santa Rosa':{
        //Col.Baron-Santa Rosa
        ida:[
            {id:1, dia: 'Lun a Sab', hora:'07:00hs', ascenso:'Domicilio', descenso:'Domicilio'},
            {id:2, dia: 'Viernes', hora:'15:00hs', ascenso:'Domicilio', descenso:'Domicilio'},
            {id:3, dia: 'Domingo', hora:'19:00hs', ascenso:'Domicilio', descenso:'Domicilio'}
        ],
        //Santa Rosa- Col.Baron
        vuelta:[
            {id:4, dia: 'Lun a Jue', hora:'13:00hs', ascenso:'Terminal', descenso:'Domicilio'},
            {id:5, dia: 'Viernes', hora:'12:00hs', ascenso:'Terminal', descenso:'Domicilio'},
            {id:6, dia: 'Viernes', hora:'20:00hs', ascenso:'Terminal', descenso:'Domicilio'},
            {id:7, dia: 'Sabado', hora:'13:00hs', ascenso:'Terminal', descenso:'Domicilio'},
            {id:8, dia: 'Domingo', hora:'21:00hs', ascenso:'Terminal', descenso:'Domicilio'}
        ]
    },


    'General Pico':{
        //Col.Baron- General Pico
        ida:[
            {id:9, dia: 'Lunes', hora:'07:00hs', ascenso:'Terminal', intermedio:'Villa Mirasol',descenso:'Calle 9 y 112, Hosp.Centeno, Terminal'},
            {id:10,dia: 'Miercoles', hora: '07:00hs', ascenso: 'Terminal', intermedio:'Villa Mirasol',descenso: 'Calle 9 y 112, Hosp.Centeno, Terminal'},
            {id:11, dia:'Viernes', hora: '07:00hs', ascenso: 'Terminal', intermedio:'Villa Mirasol', descenso: 'Calle 9 y 112, Hosp.Centeno, Terminal'}
        ],
        //General Pico- Col.Baron
        vuelta:[
            {id:12, dia: 'Lunes', hora: '13:00hs', ascenso:'Terminal, Hosp.Centeno, calle 9 y 112', intermedio:'Villa Mirasol', descenso:'Terminal'},
            {id:13, dia: 'Miercoles', hora: '13:00hs', ascenso:'Terminal, Hosp.Centeno, calle 9 y 112', intermedio:'Villa Mirasol', descenso:'Terminal'},
            {id:14, dia: 'Viernes', hora: '13:00hs', ascenso:'Terminal, Hosp.Centeno, calle 9 y 112', intermedio:'Villa Mirasol', descenso:'Terminal'}
        ]
    }

}