/*

FormComponent: Un formulario que permite a los usuarios ingresar los detalles del 
gasto, como el nombre, categoría, monto y una descripción opcional. 
Puedes estructurarlo de la siguiente manera:

- InputField: Un componente reutilizable para los campos de texto y numéricos.
- SelectCategory: Un componente de selección desplegable para las categorías.
- Button: Un botón para enviar el formulario.
- FormValidation: Un componente opcional que muestra mensajes de validación si los 
campos no se completan correctamente.

*/

const FormComponent = () => {



    return(
        <>
            <form
                className="space-y-5 bg-white p-10 rounded-lg"
            >
                <div className="px-5 py-10 bg-white mt-5 flex justify-between">
                    <div className="space-y-2 relative">
                        <p className="font-black text-4xl text-red-800">
                            <span>Gastos</span>
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            <label htmlFor="category" className="font-bold">Filtrar: </label>
                            <select
                                className="border border-slate-300 rounded-lg w-full bg-white"
                                id="category"
                                
                            >

                                
                            </select>

                        </div>
                    </div>



                </div>


            </form>

        </>
    );
}

export default FormComponent;