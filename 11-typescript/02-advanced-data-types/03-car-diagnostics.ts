type CarBody = { material: string; state: string };
type Tires = { airPressure: number; condition: string };
type Engine = { horsepower: number; oilDensity: number };
type NameAndDiagnostics = { partName: string; runDiagnostics(): string };

type Diagnostics = (
  carBody: CarBody & NameAndDiagnostics,
  tires: Tires & NameAndDiagnostics,
  engine: Engine & NameAndDiagnostics
) => void;

export const diagnostics: Diagnostics = (carBody, tires, engine) => {
  console.log(carBody.runDiagnostics());
  console.log(tires.runDiagnostics());
  console.log(engine.runDiagnostics());
};
