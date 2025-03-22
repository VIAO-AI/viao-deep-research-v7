// Hiperparámetros optimizados para series temporales financieras
export const MODEL_CONFIG = {
  batchSize: 32,
  learningRate: 3e-5,
  maxSequenceLength: 2048,
  dropoutRate: 0.1,
  fractalAnalysis: true,
  stochasticProcesses: {
    enabled: true,
    volatilityClustering: true
  }
};

/**
 * Configuración avanzada para modelos de deep learning financiero
 * Incluye parámetros para:
 * - Procesos estocásticos de mercados
 * - Análisis fractal de series temporales
 * - Optimización de arquitectura neuronal
 */
export type FinancialModelConfig = typeof MODEL_CONFIG;