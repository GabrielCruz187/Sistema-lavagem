from rest_framework import serializers
from .models import Anotacao, Conta, Faturamento, Despesa

class AnotacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anotacao
        fields = '__all__'

class ContaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conta
        fields = '__all__'

class FaturamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faturamento
        fields = '__all__'

class DespesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Despesa
        fields = '__all__'
