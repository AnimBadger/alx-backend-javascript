export default function guardrail(mathFunction) {
  const final = [];
  try {
    const result = mathFunction();
    final.push(result);
  } catch (error) {
    final.push(`Error: ${error.message}`);
  } finally {
    final.push('Guardrail was processed');
  }
  return final;
}
