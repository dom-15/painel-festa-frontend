 srcpagesMenuPrincipal.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuPrincipal = () = {
  return (
    div style={{ padding '2rem' }}
      h1🎉 Festa Junina - Painel Principalh1
      ul style={{ listStyle 'none', paddingLeft 0 }}
        liLink to=registroRegistrar Venda de IngressoLinkli
        liLink to=cortesiaRegistrar Ingresso CortesiaLinkli
        liLink to=checkinFazer Check-inLinkli
        liLink to=relatoriosVer RelatóriosLinkli
      ul
    div
  );
};

export default MenuPrincipal;
