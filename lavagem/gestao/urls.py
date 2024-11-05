from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnotacaoViewSet, ContaViewSet, FaturamentoViewSet, DespesaViewSet

router = DefaultRouter()
router.register(r'anotacoes', AnotacaoViewSet)
router.register(r'contas', ContaViewSet)
router.register(r'faturamento', FaturamentoViewSet)
router.register(r'despesas', DespesaViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
