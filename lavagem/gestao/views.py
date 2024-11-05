from rest_framework import viewsets
from .models import Anotacao, Conta, Faturamento, Despesa
from .serializers import AnotacaoSerializer, ContaSerializer, FaturamentoSerializer, DespesaSerializer

class AnotacaoViewSet(viewsets.ModelViewSet):
    queryset = Anotacao.objects.all()
    serializer_class = AnotacaoSerializer

class ContaViewSet(viewsets.ModelViewSet):
    queryset = Conta.objects.all()
    serializer_class = ContaSerializer

class FaturamentoViewSet(viewsets.ModelViewSet):
    queryset = Faturamento.objects.all()
    serializer_class = FaturamentoSerializer

class DespesaViewSet(viewsets.ModelViewSet):
    queryset = Despesa.objects.all()
    serializer_class = DespesaSerializer

