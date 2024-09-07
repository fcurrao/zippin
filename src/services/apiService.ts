// Services que se utiliza para realizar las peticiones API
 
export const fetchData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) { 
      let errorMessage;
      switch (response.status) {
        case 400:
          errorMessage = 'Solicitud incorrecta (400). Verifica los datos enviados.';
          break;
        case 401:
          errorMessage = 'No autorizado (401). Revisa tus credenciales.';
          break;
        case 404:
          errorMessage = 'No encontrado (404). El recurso solicitado no existe.';
          break;
        case 500:
          errorMessage = 'Error interno del servidor (500). Inténtalo más tarde.';
          break;
        case 503:
          errorMessage = 'Servicio no disponible (503). El servidor no está disponible.';
          break;
        default:
          errorMessage = `Error inesperado (${response.status}).`;
      }
       
      throw new Error(errorMessage);
    }
    return response.json();
  } catch (error:any) { 
    throw new Error(`Error al realizar la petición: ${error.message}`);
  }
};
