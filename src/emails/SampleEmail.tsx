import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Preview,
    Text,
  } from "@react-email/components";
  
  interface SampleEmailProps {
    asuntoCorreo: string;
    mensaje: string;
    correo: string;
  }
  
  export const SampleEmail = ({
    asuntoCorreo,
    mensaje,
    correo,
  }: SampleEmailProps) => (
    <Html>
      <Head />
      <Preview>
        The sales intelligence platform that helps you uncover qualified leads.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={paragraph}>Asunto: {asuntoCorreo}.</Text>
          <Text style={paragraph}>Correo: {correo}.</Text>
          <Text style={paragraph}>
            {mensaje}
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  SampleEmail.PreviewProps = {
    asuntoCorreo: "Alan",
    mensaje: "Esto es un mensaje por defecto",
    correo: "correo@prueba.com"
  } as SampleEmailProps;
  
  export default SampleEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
  };
  
  const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
  };
  
  const btnContainer = {
    textAlign: "center" as const,
  };
  
  const button = {
    backgroundColor: "#5F51E8",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    padding: "12px",
  };
  
  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };
  