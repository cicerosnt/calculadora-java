 var x, y, y2, result, sValorTmp, cUltimaOperacao, sVisor, bProximo, key, String, bErro;
 
 x = 0;
 y = 0;
 y2= 0;
 bErro = false;
 bProximo = false;
 sValorTmp = "";
 cUltimaOperacao="";
 result = 0;
 sVisor="";

 function Round10(rval) {
    return Math.round(rval * Math.pow(10,10))/Math.pow(10,10);
 }

function mykeyhandler() {
   key = window.event.keyCode;
   if (window.event &&  key== 8) {
      
      switch (cUltimaOperacao){
         case '+':
         case '-':
	 case '*':
	 case '/':
	 case '%':
	 case '=':
	    window.event.cancelBubble = true;
      	    window.event.returnValue = false;
      	    break;
      	 default:
	    window.event.cancelBubble = true;
      	    window.event.returnValue = false;      	    
            i = (sVisor.length-1);           
            sVisor = sVisor.substring(0,i);

   	    i = (sValorTmp.length-1);           
            sValorTmp = sValorTmp.substring(0,i);            
                        
            MostraValor(sVisor);
            break;
      }
   }
}

 function microsoftKeyPress() 
 {
	key = window.event.keyCode;
	
 	if ( (key >= 48) && (key <= 57)  || (key == 46) )
 	{
	   ClickValor(String.fromCharCode(key));
 	}
	else if ( (key == 37) || (key == 42) || (key == 43) || (key == 45) || (key == 47) || (key == 61) || (key == 67) || (key == 99) )
 	{
	   ClickOperacao(String.fromCharCode(key));
	}
	else if ( (key == 13) )
	{	   
	   ClickOperacao('=');
	}
	else if ( (key == 44) )
	{
	   ClickValor('.');
	}
 }

 function MostraValor(sValor)
 {
    var sCodigoHtml;
    sCodigoHtml = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td align=\"right\" class=\"VisorC\">";
        
    for (i=0;i<sValor.length;i++){
      sValor = sValor.replace(".",",");
    }    
    
    sCodigoHtml += sValor;
    sCodigoHtml += "</td></tr></table>";
    document.getElementById("idResultado").innerHTML = sCodigoHtml;
 }
 
 function ClickOperacao(sOperador)
 {
    if ( (bErro) && ((sOperador != 'C') && (sOperador != 'c')) )       
       return;
       
	   
    switch (sOperador)
	{
	   case '+':
	     if (x == 0)
		 {  
		    x = Round10(parseFloat(sValorTmp));
		    //sVisor = x + "<br>+";
 		    sVisor = x + " + ";
		    sValorTmp = 0;
		 } 
		 else if (y == 0)
		 { 
		    y = Round10(parseFloat(sValorTmp));
			switch (cUltimaOperacao)
			{  
			    case '-':
  			       result = Round10(x - y);
				   break;
				   
			    case '+':
			       result = Round10(x + y);
				   break;
				   
			    case '*':
			       result = Round10(x * y);
				   break;
				   
			    case '/':
			  	   if (y == 0)
			       {
			          MostraValor("Divisão por zero!");
					  bErro = true;
				      return;
				   } 
			       else
  			          result = Round10(x / y);
				   break;
				   
				case '%':
 			       result = Round10((x * y) / 100);
				   break;				   
				   
			}
			if (y2 > 0)
			{
			  sVisor = y2;
			  y2 = 0;
			}
			else
			{
				sVisor = y;
			}
			//sVisor += "<br>=" + Round10(parseFloat(result)) + "<br>+";
			//sVisor += " = " + Round10(parseFloat(result)) + " + ";
			sVisor = " = " + Round10(parseFloat(result)) + " + ";
			x = result; 
			y = 0;
			sValorTmp = 0
		 }
		 cUltimaOperacao = '+';
		 break;

	   case '-':
	     if (x == 0)
		 {
		    x = Round10(parseFloat(sValorTmp));
		    //sVisor = x + "<br>-";
		    sVisor = x + " - ";
		    sValorTmp = 0;
		 } 
		 else if (y == 0)
		 {
		    y = Round10(parseFloat(sValorTmp));
			switch (cUltimaOperacao)
			{  
			    case '-':
  			       result = Round10(x - y);
				   break;
				   
			    case '+':
			       result = Round10(x + y);
				   break;
				   
			    case '*':
			       result = Round10(x * y);
				   break;
				   
			    case '/':
			  	   if (y == 0)
			       {
			          MostraValor("Divisão por zero!"); 
					  bErro = true;
					  return;
			  	   } 
			       else
  			          result = Round10(x / y);
				   break;
				   
				case '%':
 			       result = Round10((x * y) / 100);
				   break;				   
			}
			if (y2 > 0)
			{
			  sVisor = y2;
			  y2 = 0;
			}
			else
			{
				sVisor = y;
			}
			//sVisor += "<br>=" + Round10(parseFloat(result)) + "<br>-";
			//sVisor += " = " + Round10(parseFloat(result)) + " - ";
			sVisor = " = " + Round10(parseFloat(result)) + " - ";
			x = result; 
			y = 0;
			sValorTmp = 0
		 }
		 cUltimaOperacao = '-';
		 break;

	   case '*':
	     if (x == 0)
		 {
		    x = Round10(parseFloat(sValorTmp));
			// sVisor = x + "<br>*";
			sVisor = x + " * ";
			sValorTmp = 0;
		 } 
		 else if (y == 0)
		 {
		    y = Round10(parseFloat(sValorTmp));
			switch (cUltimaOperacao)
			{  
			    case '-':
  			       result = Round10(x - y);
				   break;
				   
			    case '+':
			       result = Round10(x + y);
				   break;
				   
			    case '*':
			       result = Round10(x * y);
				   break;
				   
			    case '/':
			  	   if (y == 0)
			  	   {
			    	  MostraValor("Divisão por zero!");
					  bErro = true;
					  return;
				   } 
			       else
  			          result = Round10(x / y);
				   break;
				   
				case '%':
 			       result = Round10((x * y) / 100);
				   break;				   
			}
			if (y2 > 0)
			{
			  sVisor = y2;
			  y2 = 0;
			}
			else
			{
				sVisor = y;
			}
			// sVisor += "<br>=" + Round10(parseFloat(result)) + "<br>*";
			//sVisor += " = " + Round10(parseFloat(result)) + " * ";
			sVisor = " = " + Round10(parseFloat(result)) + " * ";
			x = result; 
			y = 0;
			sValorTmp = 0
		 }
		 cUltimaOperacao = '*';
	     break;

	   case '/':
	     if (x == 0)
		 {
		    x = Round10(parseFloat(sValorTmp));
			//sVisor = x + "<br>/";
			sVisor = x + " / ";
			sValorTmp = 0;
		 } 
		 else if (y == 0)
		 {
		    y = Round10(parseFloat(sValorTmp));
			switch (cUltimaOperacao)
			{  
			    case '-':
  			       result = Round10(x - y);
				   break;
				   
			    case '+':
			       result = Round10(x + y);
				   break;
				   
			    case '*':
			       result = Round10(x * y);
				   break;
				   
			    case '/':
			  	   if (y == 0)
			  	   {
			     	  MostraValor("Divisão por zero!"); 
					  bErro = true;
					  return;
				   } 
			       else
  			          result = Round10(x / y);
				   break;
				   
				case '%':
 			       result = Round10((x * y) / 100);
				   break;				   
			}
			if (y2 > 0)
			{
			  sVisor = y2;
			  y2 = 0;
			}
			else
			{
				sVisor = y;
			}
			//sVisor += "<br>=" + Round10(parseFloat(result)) + "<br>/";
			//sVisor += " = " + Round10(parseFloat(result)) + " / "; 
			sVisor = " = " + Round10(parseFloat(result)) + " / "; 
			x = result; 
			y = 0;
			sValorTmp = 0
		 }
		 cUltimaOperacao = '/';
	     break;

	   case '%':
	     if ( (x == 0) || (cUltimaOperacao != '*') )
		 {
	  		 MostraValor("Operação inválida!<br>Ex: 100 * 10%");
			 bErro = true;
      		 return;
		 } 
		 else if (y == 0)
		 {
		    y = Round10(parseFloat(sValorTmp));
 			result = Round10((x * y) / 100);
			if (y2 > 0)
			{
			  sVisor = y2;
			  y2 = 0;
			}
			else
			{
				sVisor = y;
			}
			//sVisor += "%<br>=" + Round10(parseFloat(result)) + "<br>";
			//sVisor += "% =" + Round10(parseFloat(result));
			sVisor = "% =" + Round10(parseFloat(result));
			x = result; 
			y = 0;
			sValorTmp = 0
		 }
		 cUltimaOperacao = '=';
	     break;
		 
		 
	   case '=':
	     switch (cUltimaOperacao)
		 {
			case '+':
			  if (y == 0)
		      {
		         y = Round10(parseFloat(sValorTmp));
			  }
			  result = Round10(x + y);
			  //sVisor = x + "<br>+" + y + "<br>=" + Round10(parseFloat(result));
			  sVisor = x + " + " + y + " = " + Round10(parseFloat(result));
			  x = result;
			  y2 = y;
			  y = 0;
			  sValorTmp = 0;
			  break;

			case '-':
			  if (y == 0)
		      {
		         y = Round10(parseFloat(sValorTmp));
			  }
			  result = Round10(x - y);
			  //sVisor = x + "<br>-" + y + "<br>=" + Round10(parseFloat(result));
			  sVisor = x + " - " + y + " =" + Round10(parseFloat(result));
			  x = result;
			  y2 = y;
			  y = 0;
			  sValorTmp = 0;
			  break;

			case '*':
			  if (y == 0)
		      {
		         y = Round10(parseFloat(sValorTmp));
			  }
			  result = Round10(x * y);
			  //sVisor = x + "<br>*" + y + "<br>=" + Round10(parseFloat(result));
			  sVisor = x + " * " + y + " =" + Round10(parseFloat(result));
			  x = result;
			  y2 = y;
			  y = 0;
			  sValorTmp = 0;
			  break;

			case '/':
			  if (y == 0)
		      {
		         y = Round10(parseFloat(sValorTmp));
			  }
			  if (y == 0) 
			  {
			     MostraValor("Divisão por zero!");
  			     bErro = true;				 
				 return;
			  } 
			  else
			  {
				 result = Round10(x / y);
				 // sVisor = x + "<br>/" + y + "<br>=" + Round10(parseFloat(result));
                                 sVisor = x + " / " + y + " =" + Round10(parseFloat(result));
				 x = result;
				 y2 = y;
				 y = 0;
			  	 sValorTmp = 0;
			  }
			  break;
  
			case '%':
	 	      if ( (y == 0) )
		  	  {
	  			 MostraValor("Operação inválida!<br>Ex: 100 * 10%");
				 bErro = true;
	      		 return;
		 	  } 
 			  result = Round10((x * y) / 100);
			  // sVisor = x + "<br>%" + y + "<br>=" + Round10(parseFloat(result));
              		  sVisor = x + " % " + y + " =" + Round10(parseFloat(result));
			  x = result;
			  y2 = y;
			  y = 0;
	  	  	  sValorTmp = 0;
			  break;
			  	
			default:
			  return;
			  
		 }
		 cUltimaOperacao = '=';
 		 break;

	   case 'C':
	   case 'c':
	   case 'E':
	   case 'e':
	         x = 0;
		 y = 0;
		 y2 = 0;
	     	 result = 0;
		 sValorTmp = 0;
		 sVisor = "0";
		 bErro = false;
		 cUltimaOperacao = 'C';
	     break;

	   default:
		 break;
	}
	MostraValor(sVisor);
 }

 function ClickValor(sValor)
 {
     if ( bErro )
       return;
	   

 	if (cUltimaOperacao == '=') 
	{
	   MostraValor("Escolha primeiro<br>a operação!");
       return;
	}		   

    // Limpar o visor se não existir valores nas variáveis
    if ( (x == 0) && (y == 0) && (result == 0) && (sVisor != "") && (sValorTmp == ""))
	   sVisor = "";
	   
	if (sValorTmp.length > 15)
	{
	   MostraValor("Valor não suportado!");
       return;
	}
	else
	{
	   if ( (sValor == '.') && (sValorTmp == '') ) 
	   {
	      sValorTmp = '0' + sValor;
          sVisor = sVisor + sValorTmp;
	   }  
	   else  if ( ((sValor == '.') && (sValorTmp.indexOf(".") == -1))  || (sValor != '.') )
	   {
	       if (sValorTmp != '0')
	  		  sValorTmp = sValorTmp + "" + sValor;
	       else 
	          sValorTmp = sValor;

	      sVisor = sVisor + sValor;
	   }
    }
 	MostraValor(sVisor);
 }

document.onkeypress = microsoftKeyPress;
document.onkeydown  = mykeyhandler;




