// src/errors/handlePrismaError.ts
export const handlePrismaError = (error: any) => {
  if (error.code === "P2002") {
    return {
      statusCode: 400,
      message: `Duplicate field: ${error.meta?.target}`,
    };
  }

  if (error.code === "P2025") {
    return {
      statusCode: 404,
      message: "Record not found",
    };
  }

  return {
    statusCode: 500,
    message: "Database error",
  };
};
